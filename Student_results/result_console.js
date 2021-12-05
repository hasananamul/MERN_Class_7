let result = new StudentsResult();
student.map((data) => {
  console.log(`
  Name : ${data.Name}
  Roll : ${data.Roll}
  Location : ${data.Location}
  Gender : ${data.Gender}

  =========================================================
  Subjects--    --Marks --      --GPA Marks--       --Grade Marks--
  Bangla        : ${data.bn}               ${
    result.gpaGrade(data.bn).gpagrd
  }                       ${result.gpaGrade(data.bn).grade}
  English       : ${data.en}                 ${
    result.gpaGrade(data.en).gpagrd
  }                        ${result.gpaGrade(data.en).grade}
  math          : ${data.math}                 ${
    result.gpaGrade(data.math).gpagrd
  }                          ${result.gpaGrade(data.math).grade}
  Social Science : ${data.ss}               ${
    result.gpaGrade(data.ss).gpagrd
  }                      ${result.gpaGrade(data.ss).grade}
  Science       : ${data.s}                 ${
    result.gpaGrade(data.s).gpagrd
  }                         ${result.gpaGrade(data.s).grade}
-----------------------------------------------------------
Total GPA is Points : ${
    result.totalResult(data.bn, data.en, data.math, data.ss, data.s).cgpa
  }
Total grade : ${
    result.totalResult(data.bn, data.en, data.math, data.ss, data.s).totalGrade
  }
    `);
});
