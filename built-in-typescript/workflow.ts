export interface WorkflowMessage {
  status: number;
  msg?: string;
}

const messages = {
  10: "Report creation",
  20: "Report error",
  30: "Report log"
};

export const createWorkflowMessage = (status: number): WorkflowMessage => ({
  status,
  msg: messages[status]
});
