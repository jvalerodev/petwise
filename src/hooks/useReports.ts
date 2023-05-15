import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import type { CreateReportFormValues, SelectReports } from '@/types/types';
import ReportService from '@/serivces/reports';
import { addReport } from '@/redux/reducer/reports';
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

  return { reports, result, error, loading, handleCreateReport };
};

export default useReports;
