function StudentsResult() {
  this.gpaGrade = function (subject) {
    let gpagrd;
    let grade;
    if (subject >= 0 && subject <= 32) {
      gpagrd = 0;
      grade = "F";
    } else if (subject >= 33 && subject <= 39) {
      gpagrd = 1;
      grade = "D";
    } else if (subject >= 40 && subject <= 49) {
      gpagrd = 2;
      grade = "C";
    } else if (subject >= 50 && subject <= 59) {
      gpagrd = 3;
      grade = "B";
    } else if (subject >= 60 && subject <= 69) {
      gpagrd = 3.5;
      grade = "A-";
    } else if (subject >= 70 && subject <= 79) {
      gpagrd = 4;
      grade = "A";
    } else if (subject >= 80 && subject <= 100) {
      gpagrd = 5;
      grade = "A+";
    } else if (subject > 100) {
      gpagrd = "invalid";
      grade = "Invalid";
    }
    return {
      gpagrd,
      grade,
    };
  };
  this.totalResult = function (b, e, mth, ss, s) {
    let cgpa;
    let totalGrade;
    let totalGpa =
      this.gpaGrade(b).gpagrd +
      this.gpaGrade(e).gpagrd +
      this.gpaGrade(mth).gpagrd +
      this.gpaGrade(ss).gpagrd +
      this.gpaGrade(s).gpagrd;
    cgpa = totalGpa / 5;
    if (b < 33 || e < 33 || mth < 33 || ss < 33 || s < 33) {
      totalGrade = "F";
    } else if (cgpa >= 0 && cgpa < 1) {
      totalGrade = "You are failed!!!";
    } else if (cgpa >= 1 && cgpa < 2) {
      totalGrade = "D";
    } else if (cgpa >= 2 && cgpa < 3.5) {
      totalGrade = "B";
    } else if (cgpa >= 3.5 && cgpa < 4) {
      totalGrade = "A-";
    } else if (cgpa >= 4 && cgpa < 5) {
      totalGrade = "A";
    } else if (cgpa >= 5) {
      totalGrade = "A+";
    }
    return {
      cgpa: totalGrade == "F" ? 0 : cgpa,
      totalGrade: totalGrade == "F" ? "You are failed " : totalGrade,
    };
  };
}
