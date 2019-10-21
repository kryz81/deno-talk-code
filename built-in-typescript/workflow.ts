export interface WorkflowMessage {
  status: number;
  msg?: string;
}

const messages: { [key: number]: string } = {
  10: "Report creation",
  20: "Report error"
};

export const createWorkflowMessage = (status: number): WorkflowMessage => ({
  status,
  msg: messages[status]
});
