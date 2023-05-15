import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import type {
  CreateReportFormValues,
  EditReportFormValues,
  Report,
  SelectReports
} from '@/types/types';
import ReportService from '@/serivces/reports';
import {
  addReport,
  setAllReports,
  emptyReports,
  updateReport,
  deleteReport
} from '@/redux/reducer/reports';
import { removeMessage } from '@/utils/functions';
import { isAxiosError } from 'axios';

interface Props {
  reset?: UseFormReset<any>;
}

const useReports = (props: Props = {}) => {
  const { reset } = props;

  const { reports } = useSelector((state: SelectReports) => state.reports);

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCreateReport = async (data: CreateReportFormValues) => {
    setLoading(true);

    try {
      const report = await ReportService.create(data);
      dispatch(addReport({ report }));

      setResult('Informe creado existosamente');
      reset?.();
      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  const getReports = async (petId: string) => {
    setLoading(true);

    try {
      const savedReports = await ReportService.getAll(petId);
      dispatch(setAllReports({ reports: savedReports }));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleEmptyReports = () => {
    dispatch(emptyReports());
  };

  const handleEditReport = async (
    report: Report | null,
    data: EditReportFormValues
  ) => {
    setLoading(true);

    try {
      const reportUpdated = await ReportService.update(report, data);
      dispatch(updateReport({ report: reportUpdated }));
      setResult('Informe actualizado existosamente');

      reset?.(() => ({
        diagnosis: '',
        treatment: '',
        indications: ''
      }));

      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  const handleDeleteReport = async (reportId: string) => {
    setLoading(true);

    try {
      await ReportService.delete(reportId);
      dispatch(deleteReport({ id: reportId }));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return {
    reports,
    result,
    error,
    loading,
    handleCreateReport,
    getReports,
    handleEmptyReports,
    handleEditReport,
    handleDeleteReport
  };
};

export default useReports;
