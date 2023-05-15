import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type { CreateReportFormValues, Report } from '@/types/types';

const ReportService = {
  create: async (data: CreateReportFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_REPORT, data);
    const report: Report = res.data.report;
    return report;
  }
};

export default ReportService;
