export class User {
  public email: string;
  public firstName: string;
  public lastName: string;
  public name: string;
  public sub: string;
  public website: string;
  public picture: string;

  public static fromPojo(pojo: any) {
    pojo = pojo || {};

    const user = new User();
    user.email = pojo.email;
    user.firstName = pojo.given_name;
    user.lastName = pojo.family_name;
    user.name = pojo.name;
    user.sub = pojo.sub;
    user.website = pojo.website;
    user.picture = pojo.picture;

    return user;
  }
}
