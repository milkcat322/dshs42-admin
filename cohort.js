// dshs42 관리 — scripts/build-admin.mjs 가 scripts/admin-cohorts.mjs 로 만든 파일입니다. 직접 고치지 않습니다.
window.DSHS_COHORT = {
  "id": 42,
  "label": "42기",
  "title": "dshs42 관리",
  "min": 2000,
  "max": 2999,
  "strict": false,
  "otherRanges": [
    [
      1000,
      1999
    ]
  ],
  "subjects": null,
  "otherSubjects": [
    "국어",
    "영어회화",
    "지구과학",
    "진로",
    "화학",
    "적분과 통계",
    "기하와 벡터",
    "물리",
    "한국사",
    "프로그래밍",
    "생명과학"
  ],
  "noAsgSubjects": [
    "미술",
    "체육"
  ],
  "grade": null,
  "studentUrl": "https://dshs42.app",
  "academicUrl": "https://dshs42-beta.netlify.app/academic.json",
  "keys": {
    "auth": "dshs42-admin-auth",
    "school": "dshs42-admin-school",
    "push": "dshs42-admin-push",
    "fbSeen": "dshs-fb-seen",
    "ovSeen": "dshs-overview-seen"
  }
};
