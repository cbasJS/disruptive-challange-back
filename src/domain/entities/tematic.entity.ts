type CreatedInfoTematic = {
  createdAt?: string;
  user: {
    id: string;
    userName: string;
  };
};

export interface TematicEntityOptions {
  _id: string;
  name: string;
  thumbnailImage: string;
  allowVideo?: boolean;
  allowImage?: boolean;
  allowText?: boolean;
  createdInfo: CreatedInfoTematic;
}

export class TematicEntity {
  public _id: string;
  public name: string;
  public thumbnailImage: string;
  public allowVideo?: boolean;
  public allowImage?: boolean;
  public allowText?: boolean;
  public createdInfo: CreatedInfoTematic;

  constructor(options: TematicEntityOptions) {
    const {
      _id,
      name,
      thumbnailImage,
      allowVideo = false,
      allowImage = false,
      allowText = false,
      createdInfo,
    } = options;
    this._id = _id;
    this.name = name;
    this.thumbnailImage = thumbnailImage;
    this.allowVideo = allowVideo;
    this.allowImage = allowImage;
    this.allowText = allowText;
    this.createdInfo = createdInfo;
  }

  //"{ "level": "high", "message":"Hola Mundo", "createdAt":"128937TZ12378123" }"
  // static fromJson = (json: string): TematicEntity => {
  //   json = json === "" ? "{}" : json;

  //   const { typeOfUser, mail, userName, createdAt, _id } = JSON.parse(json);

  //   const user = new TematicEntity({
  //     _id,
  //     typeOfUser,
  //     mail,
  //     userName,
  //     createdAt,
  //   });

  //   return user;
  // };

  static fromObject = (object: { [key: string]: any }): TematicEntity => {
    const {
      _id,
      name,
      thumbnailImage,
      allowVideo = false,
      allowImage = false,
      allowText = false,
      createdInfo,
    } = object;

    const tematic = new TematicEntity({
      _id,
      name,
      thumbnailImage,
      allowVideo,
      allowImage,
      allowText,
      createdInfo: {
        ...createdInfo,
        createdAt: new Date(),
      },
    });

    return tematic;
  };
}
