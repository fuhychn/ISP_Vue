import request from '../../utils/request'
const API_URL_FIRST = 'Control'
const API_URL_SECOND = 'SchedulePanel'
import { REQUEST_TIMEOUT } from '../config'
// 训练预测模型接口
export function TrainModel(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/train_model/`,
    method: 'post',
    data
  })
}
// 数据检查
export function DoCheckScheduleData(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/check_schedule_file/`,
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    data
  })
}
// 导入排程表格接口
export function ImportSchedule(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/import_schedule/`,
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    data
  })
}
// 导入主板+小板排程表格接口
export function ImportScheduleBoth(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/import_schedule_both/`,
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    data
  })
}
// 计算排程表格接口
export function ComputeScheduleMain(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/compute_schedule_main/`,
    method: 'post',
    timeout: 100 * 60 * 1000,
    data
  })
}
export function ComputeScheduleSmall(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/compute_schedule_small/`,
    method: 'post',
    timeout: 100 * 60 * 1000,
    data
  })
}
export function ComputeScheduleABL(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/compute_schedule_abl/`,
    method: 'post',
    timeout: 100 * 60 * 1000,
    data
  })
}
export function ComputeScheduleBoth(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/compute_schedule_both/`,
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    data
  })
}
// 终止深度搜素
export function StopTabu(user_name) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/stop_tabu/`,
    method: 'get',
    params: { user_name }
  })
}
// 获取进度条
export function GetProgress() {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_progress/`,
    method: 'get'
  })
}
// 下载最新排程
export function DownloadSchedule() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_schedule/`,
    responseType: 'blob'
  })
}
// 下载最新日志
export function DownloadLatestLog() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_latest_log/`,
    responseType: 'blob'
  })
}
// 下载无程序表
export function DownloadNoProgram() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_program/`,
    responseType: 'blob'
  })
}
// 下载主板idle明细
export function DownloadIdleInfoMain() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_idle_info_main/`,
    responseType: 'blob'
  })
}
// 下载主板量化结果
export function DownloadStatisticsMain() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_statistics_main/`,
    responseType: 'blob'
  })
}
// 下载小板idle明细
export function DownloadIdleInfoSmall() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_idle_info_small/`,
    responseType: 'blob'
  })
}
// 下载小板量化结果
export function DownloadStatisticsSmall() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_statistics_small/`,
    responseType: 'blob'
  })
}
// 获取运行状态
export function GetRunFlag() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_run_flag/`
  })
}
// 获取排程结果
export function GeScheduleRes() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_schedule_res/`
  })
}
// 终止计算排程
export function StopSchedule(user_name) {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/stop_schedule/`,
    params: { user_name }
  })
}
// 导出主板接口
export function ExportMainScheduleData(data) {
  return request({
    method: 'get',
    url: '/schedule/api/exportMainScheduleData',
    responseType: 'blob'
  })
}
// 导出小板接口
export function ExportSmallScheduleData(data) {
  return request({
    method: 'get',
    url: '/schedule/api/exportSmallScheduleData',
    responseType: 'blob'
  })
}
// 导出ABL接口
export function ExportABLScheduleData(data) {
  return request({
    method: 'get',
    url: '/schedule/api/exportABLScheduleData',
    responseType: 'blob'
  })
}
// 下载最新排程
export function DownloadScheduleSmall() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_schedule_small/`,
    responseType: 'blob'
  })
}
// 下载主板上传排程
export function DownloadUploadFileMain() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_uploadfile_main/`
  })
}
// 下载小板上传排程
export function DownloadUploadFileSmall() {
  return request({
    method: 'get',
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/download_uploadfile_small/`
  })
}
// 获取进度条
export function GetUploadFileTime() {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/get_uploadfile_time/`,
    method: 'get'
  })
}

// 转移扣点
export function DoBucklePoints(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/do_buckle_points/`,
    method: 'post',
    timeout: REQUEST_TIMEOUT,
    data
  })
}
// 修改放假日期
export function ModifyHoliday(data) {
  return request({
    url: `/${API_URL_FIRST}/${API_URL_SECOND}/modify_holiday/`,
    method: 'post',
    data
  })
}
