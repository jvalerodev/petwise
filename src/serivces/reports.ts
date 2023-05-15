import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type {
  CreateReportFormValues,
  EditReportFormValues,
  Report
} from '@/types/types';

const ReportService = {
  create: async (data: CreateReportFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_REPORT, data);
    const report: Report = res.data.report;
    return report;
  },

  getAll: async (petId: string) => {
    const res = await axiosClient.get(`${API_ENDPOINTS.GET_REPORTS}/${petId}`);
    const reports: Report[] = res.data.reports;
    return reports;
  },

  update: async (report: Report | null, data: EditReportFormValues) => {
    const res = await axiosClient.put(
      `${API_ENDPOINTS.UPDATE_REPORT}/${report?.id}`,
      data
    );
    const reportUpdated: Report = res.data.report;
    return reportUpdated;
  },

  delete: async (reportId: string) => {
    await axiosClient.delete(`${API_ENDPOINTS.DELETE_REPORT}/${reportId}`);
  }
};

export default ReportService;
