interface UpdateNamePayload {
  name: string;
}

export class UpdateName {
  readonly type = '[user] update name';
  constructor( private payload: UpdateNamePayload ) {}
}
