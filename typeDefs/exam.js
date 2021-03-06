const { gql } = require('apollo-server-express')

module.exports = gql`
  type Exam {
    id: ID
    public: Boolean
    author: String
    title: String
    code: String
    pass: Int
    time: Int
    image: String
    cover: [Cover]
    test: [TestItem]
  }

  type Cover {
    variant: Int
    text: String
  }

  type TestItem {
    variant: Int
    question: [Question]
    choices: [Choice]
    answer: [Boolean]
    explanation: [Explanation]
  }

  type Question {
    variant: Int
    text: String
  }

  type Choice {
    label: String
    text: String
  }

  type Explanation {
    variant: Int
    text: String
  }

  input ExamInput {
    examId: ID
    author: String
    title: String
    code: String
    pass: Int
    time: Int
    image: String
    cover: [CoverInput]
    test: [TestItemInput]
  }

  input CoverInput {
    variant: Int
    text: String
  }

  input TestItemInput {
    variant: Int
    question: [QuestionInput]
    choices: [ChoiceInput]
    answer: [Boolean]
    explanation: [ExplanationInput]
  }

  input QuestionInput {
    variant: Int
    text: String
  }

  input ChoiceInput {
    label: String
    text: String
  }

  input ExplanationInput {
    variant: Int
    text: String
  }

  type ExamPayload {
    success: Boolean
    message: String
    exam: Exam
  }

  type Edge {
    node: Exam
    cursor: String
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type PagPayload {
    totalCount: Int
    edges: [Edge]
    pageInfo: PageInfo
  }

  type Query {
    allExams: [Exam]
    myExams: [Exam]
    examById(examId: ID): Exam
    publicExams: [Exam]
    publicExamsPag(first: Int, after: String): PagPayload
  }

  type Mutation {
    saveExam(input: ExamInput): ExamPayload
    deleteExam(examId: ID): ExamPayload
    makePublic(examId: ID, bool: Boolean): ExamPayload
  }
`
