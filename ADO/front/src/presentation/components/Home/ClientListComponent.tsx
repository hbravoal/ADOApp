import 'reflect-metadata';
import {container} from 'tsyringe';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Select,
  Tooltip,
} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';
import {IGetAllClientApplication} from '../../../domain/interfaces/application/client';
import {ClientResponse} from '../../../domain/client/dtos';
import {ICreateClientApplication} from '../../../domain/interfaces/application/client/ICreateClientApplication';
import {CreateClientRequest} from '../../../domain/client/dtos/CreateClientRequest';

const ClientListComponent = () => {
  const _getClients = container.resolve<IGetAllClientApplication>(
    'IGetAllClientApplication',
  );
  const _post = container.resolve<ICreateClientApplication>(
    'ICreateClientApplication',
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [resfresh, setRefresh] = useState(false);
  const [tableData, setTableData] = useState<ClientResponse[]>([]);
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  const handleCreateNewRow = (values: any) => {
    let request = {} as CreateClientRequest;
    request.identification = values.identification;
    request.name = values.name;
    request.lastName = values.lastName;
    request.documentTypeId = Number(values.documentTypeId);
    request.genderId = Number(values.genderId);
    request.active = true;
    _post.Create(request).then((item: ClientResponse) => {
      setRefresh(true);
    });
  };

  const handleSaveRowEdits: MaterialReactTableProps<ClientResponse>['onEditingRowSave'] =
    async ({exitEditingMode, row, values}) => {
      if (!Object.keys(validationErrors).length) {
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await _getClients.GetAll(1, 100);
      setTableData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await _getClients.GetAll(1, 100);
      setTableData(data);
    };
    if (resfresh) {
      fetchData();
      setRefresh(false);
    }
  }, [resfresh]);
  const handleDeleteRow = useCallback(
    (row: MRT_Row<ClientResponse>) => {
      if (
        // eslint-disable-next-line no-restricted-globals
        !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<ClientResponse>,
    ): MRT_ColumnDef<ClientResponse>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: event => {
          // const isValid = true;
          const isValid =
            cell.column.id === 'documentTypeId'
              ? validateRequired(event.target.value)
              : cell.column.id === 'genderId'
              ? validateRequired(event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

  const columns = useMemo<MRT_ColumnDef<ClientResponse>[]>(
    () => [
      // {
      //   accessorKey: 'id',
      //   header: 'ID',
      //   enableColumnOrdering: false,
      //   enableEditing: false, //disable editing on this column
      //   enableSorting: false,
      //   size: 80,
      //   enableHiding: false, // Still displayed but at least disabled
      //   enableColumnFilter: false,
      //   enableGlobalFilter: false,
      //   enableColumnFilterModes: false,
      // },
      {
        accessorKey: 'identification',
        header: 'Identification',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({cell}) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'documentType.description',
        header: 'Identification type',
        id: 'documentTypeId',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({cell}) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'name',
        header: 'First Name',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({cell}) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        muiTableBodyCellEditTextFieldProps: ({cell}) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'gender.description',
        header: 'Gender',
        size: 80,
        id: 'genderId',
        muiTableBodyCellEditTextFieldProps: ({cell}) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps],
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({row, table}) => (
          <Box sx={{display: 'flex', gap: '1rem'}}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained">
            Create New Account
          </Button>
        )}
      />
      <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

interface CreateModalProps {
  columns: MRT_ColumnDef<ClientResponse>[];
  onClose: () => void;
  onSubmit: (values: ClientResponse) => void;
  open: boolean;
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  console.log('', columns);
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {} as any),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={e => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: {xs: '300px', sm: '360px', md: '400px'},
              gap: '1.5rem',
            }}>
            {columns.map(column =>
              column.id === 'documentTypeId' ? (
                <Select
                  labelId="demo-simple-select-label"
                  name="documentTypeId"
                  value={values['documentTypeId'] ?? 0}
                  label="Document Type"
                  onChange={e => {
                    setValues({...values, [e.target.name]: e.target.value});
                  }}>
                  <MenuItem value={0}>Identification</MenuItem>
                  <MenuItem value={1}>C'edula de ciudadan'ia</MenuItem>
                  <MenuItem value={2}>Tarjeta de identidad</MenuItem>
                </Select>
              ) : column.id === 'genderId' ? (
                <Select
                  labelId="demo-simple-select-label"
                  id="genderId"
                  name="genderId"
                  value={values['genderId'] ?? 0}
                  label="Gender"
                  onChange={e => {
                    console.log(values);
                    console.log('e', e.target);
                    setValues({...values, [e.target.name]: e.target.value});
                  }}>
                  <MenuItem value={0}>Gender</MenuItem>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              ) : (
                <TextField
                  key={column.accessorKey}
                  label={column.header}
                  name={column.accessorKey}
                  onChange={e => {
                    console.log(values);
                    console.log('e', e.target);

                    setValues({...values, [e.target.name]: e.target.value});
                  }}
                />
              ),
            )}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{p: '1.25rem'}}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age: number) => age >= 18 && age <= 50;

export default ClientListComponent;
