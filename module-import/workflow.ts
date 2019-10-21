export interface WorkflowMessage {
  id: string;
  msg?: string;
}

export const createWorkflowMessage = (
  id: string,
  msg?: string
): WorkflowMessage => ({
  id,
  msg
});
