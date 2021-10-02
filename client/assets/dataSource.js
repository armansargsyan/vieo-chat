"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kanbanData = void 0;
exports.kanbanData = [
    {
        Id: 1,
        Status: 'Open',
        Summary: 'Analyze the new requirements gathered from the customer.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Analyze,Customer',
        Estimate: 3.5,
        Assignee: 'Nancy Davloio',
        RankId: 1
    },
    {
        Id: 2,
        Status: 'InProgress',
        Summary: 'Improve application performance',
        Type: 'Improvement',
        Priority: 'Normal',
        Tags: 'Improvement',
        Estimate: 6,
        Assignee: 'Andrew Fuller',
        RankId: 1
    },
    {
        Id: 3,
        Status: 'Open',
        Summary: 'Arrange a web meeting with the customer to get new requirements.',
        Type: 'Others',
        Priority: 'Critical',
        Tags: 'Meeting',
        Estimate: 5.5,
        Assignee: 'Janet Leverling',
        RankId: 2
    },
    {
        Id: 4,
        Status: 'InProgress',
        Summary: 'Fix the issues reported in the IE browser.',
        Type: 'Bug',
        Priority: 'Release Breaker',
        Tags: 'IE',
        Estimate: 2.5,
        Assignee: 'Janet Leverling',
        RankId: 2
    },
    {
        Id: 5,
        Status: 'Testing',
        Summary: 'Fix the issues reported by the customer.',
        Type: 'Bug',
        Priority: 'Low',
        Tags: 'Customer',
        Estimate: '3.5',
        Assignee: 'Steven walker',
        RankId: 1
    },
    {
        Id: 6,
        Status: 'Close',
        Summary: 'Arrange a web meeting with the customer to get the login page requirements.',
        Type: 'Others',
        Priority: 'Low',
        Tags: 'Meeting',
        Estimate: 2,
        Assignee: 'Michael Suyama',
        RankId: 1
    },
    {
        Id: 7,
        Status: 'Validate',
        Summary: 'Validate new requirements',
        Type: 'Improvement',
        Priority: 'Low',
        Tags: 'Validation',
        Estimate: 1.5,
        Assignee: 'Robert King',
        RankId: 1
    },
    {
        Id: 8,
        Status: 'Close',
        Summary: 'Login page validation',
        Type: 'Story',
        Priority: 'Release Breaker',
        Tags: 'Validation,Fix',
        Estimate: 2.5,
        Assignee: 'Laura Callahan',
        RankId: 2
    },
    {
        Id: 9,
        Status: 'Testing',
        Summary: 'Fix the issues reported in Safari browser.',
        Type: 'Bug',
        Priority: 'Release Breaker',
        Tags: 'Fix,Safari',
        Estimate: 1.5,
        Assignee: 'Nancy Davloio',
        RankId: 2
    },
    {
        Id: 10,
        Status: 'Close',
        Summary: 'Test the application in the IE browser.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Testing,IE',
        Estimate: 5.5,
        Assignee: 'Margaret hamilt',
        RankId: 3
    },
    {
        Id: 11,
        Status: 'Validate',
        Summary: 'Validate the issues reported by the customer.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Validation,Fix',
        Estimate: 1,
        Assignee: 'Steven walker',
        RankId: 1
    },
    {
        Id: 12,
        Status: 'Testing',
        Summary: 'Check Login page validation.',
        Type: 'Story',
        Priority: 'Release Breaker',
        Tags: 'Testing',
        Estimate: 0.5,
        Assignee: 'Michael Suyama',
        RankId: 3
    },
    {
        Id: 13,
        Status: 'Open',
        Summary: 'API improvements.',
        Type: 'Improvement',
        Priority: 'High',
        Tags: 'Grid,API',
        Estimate: 3.5,
        Assignee: 'Robert King',
        RankId: 3
    },
    {
        Id: 14,
        Status: 'InProgress',
        Summary: 'Add responsive support to application',
        Type: 'Epic',
        Priority: 'Critical',
        Tags: 'Responsive',
        Estimate: 6,
        Assignee: 'Laura Callahan',
        RankId: 3
    },
    {
        Id: 15,
        Status: 'Open',
        Summary: 'Show the retrieved data from the server in grid control.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Database,SQL',
        Estimate: 5.5,
        Assignee: 'Margaret hamilt',
        RankId: 4
    },
    {
        Id: 16,
        Status: 'InProgress',
        Summary: 'Fix cannot open user’s default database SQL error.',
        Priority: 'Critical',
        Type: 'Bug',
        Tags: 'Database,Sql2008',
        Estimate: 2.5,
        Assignee: 'Janet Leverling',
        RankId: 4
    },
    {
        Id: 17,
        Status: 'Testing',
        Summary: 'Fix the issues reported in data binding.',
        Type: 'Story',
        Priority: 'Normal',
        Tags: 'Databinding',
        Estimate: '3.5',
        Assignee: 'Janet Leverling',
        RankId: 4
    },
    {
        Id: 18,
        Status: 'Close',
        Summary: 'Analyze SQL server 2008 connection.',
        Type: 'Story',
        Priority: 'Release Breaker',
        Tags: 'Grid,Sql',
        Estimate: 2,
        Assignee: 'Andrew Fuller',
        RankId: 4
    },
    {
        Id: 19,
        Status: 'Validate',
        Summary: 'Validate databinding issues.',
        Type: 'Story',
        Priority: 'Low',
        Tags: 'Validation',
        Estimate: 1.5,
        Assignee: 'Margaret hamilt',
        RankId: 1
    },
    {
        Id: 20,
        Status: 'Close',
        Summary: 'Analyze grid control.',
        Type: 'Story',
        Priority: 'High',
        Tags: 'Analyze',
        Estimate: 2.5,
        Assignee: 'Margaret hamilt',
        RankId: 5
    },
    {
        Id: 21,
        Status: 'Close',
        Summary: 'Stored procedure for initial data binding of the grid.',
        Type: 'Others',
        Priority: 'Release Breaker',
        Tags: 'Databinding',
        Estimate: 1.5,
        Assignee: 'Steven walker',
        RankId: 6
    },
    {
        Id: 22,
        Status: 'Close',
        Summary: 'Analyze stored procedures.',
        Type: 'Story',
        Priority: 'Release Breaker',
        Tags: 'Procedures',
        Estimate: 5.5,
        Assignee: 'Janet Leverling',
        RankId: 7
    },
    {
        Id: 23,
        Status: 'Validate',
        Summary: 'Validate editing issues.',
        Type: 'Story',
        Priority: 'Critical',
        Tags: 'Editing',
        Estimate: 1,
        Assignee: 'Nancy Davloio',
        RankId: 1
    },
    {
        Id: 24,
        Status: 'Testing',
        Summary: 'Test editing functionality.',
        Type: 'Story',
        Priority: 'Normal',
        Tags: 'Editing,Test',
        Estimate: 0.5,
        Assignee: 'Nancy Davloio',
        RankId: 5
    },
    {
        Id: 25,
        Status: 'Open',
        Summary: 'Enhance editing functionality.',
        Type: 'Improvement',
        Priority: 'Low',
        Tags: 'Editing',
        Estimate: 3.5,
        Assignee: 'Andrew Fuller',
        RankId: 5
    }
];
//# sourceMappingURL=dataSource.js.map