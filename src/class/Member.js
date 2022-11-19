class Member{
  constructor(response){

    this.id = response.databaseId;
    this.name = response.fullName;
    this.url = response.url;
    this.employment = {
      type: response.memberEmployment?.employmentType?.name,
    };
    this.enrollment = {
      status: response.memberEnrollment?.status,
      enteredAt: response.memberEnrollment?.enteredAt,
      resignedAt: response.memberEnrollment?.resignedAt,
    };
    this.division = response.memberDivisions[0]?.division?.fullName;
  }

  getOutList(){
    return [
      this.id,
      this.division,
      this.name,
      this.url,
      this.employment.type,
      this.enrollment.status,
      this.enrollment.enteredAt,
      this.enrollment.resignedAt
    ];
  }
}