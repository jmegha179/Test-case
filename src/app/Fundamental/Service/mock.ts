
export const providerListMock = [
    {
        providerCode: "NAVMA",
        providerName: "The Navigators Group, Inc.",
    },
    {
        providerCode: "NYSMU",
        providerName: "NYS Municipal Workers Comp Alliance",
    },
];


export class CreateMock<T> {
  mock: any= {
      message: "",
  };

  constructor(data: T) {
      this.mock.Data = data;
  }
}
