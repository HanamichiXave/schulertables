var app = angular.module('examApp', []);

app.controller('examCtrl', function($scope) {

	$scope.ExamList = [];
	$scope.showForm = false;
	$scope.itemindex = 0;

	$scope.SaveExam = function(ExamName){
		if(ExamName){
		$scope.ExamList.push(ExamName);
		alert('Success!');
		console.log($scope.ExamList);
		$scope.ExamName='';
	}else{
		alert('Name is a required field.3');
	}
	};

	$scope.examRemove = function(array){
		if ($scope.itemindex > -1) {
		    $scope.ExamList.splice($scope.itemindex, 1);
		     	$scope.showForm = false;
		    alert('Successfully Removed!');
		}else{
			alert('No Selected Item!');
		}
	};

	$scope.examUpdate = function(subject){
		if ($scope.itemindex > -1) {
		   	$scope.ExamList[$scope.itemindex] = subject;
		   	$scope.showForm = false;
		   	$scope.chkslct = false;
		    alert('Successfully Updated!');
		}
	};

	$scope.showEditForm = function(show, Subject, Description, index){
		$scope.showForm = show;
		$scope.showFormSubject = Subject;
		$scope.showFormDescription = Description;
		$scope.itemindex = index;
	};

	$scope.ExamType= [
					'Pre - Admission Examination',
					'Kinder Examination',
					'Grade 1 Examination',
					'Grade 2 Examination',
					'Grade 3 Examination',
					'Grade 4 Examination',
					'Grade 5 Examination',
					'Grade 6 Examination'
					];

	$scope.ExamPeriod= [
					'First Grading',
					'Second Grading',
					'Third Grading',
					'Fourth Grading',
					];




	$scope.searchNumber = 1;
    $scope.Subject= [
    				'English',
    				'Math',
    				'Science',
    				'Arts'
    				];

   	 $scope.Subjectt= [
    				'Englishh',
    				'Mathh'
    				]




    $scope.Science= [{ 
    				'Number': 1,
					'Question': 'What is the question?',
					'Answer1': 'Answer 1',
					'Answer2': 'Answer 2',
					'Answer3': 'Answer 3',
					'Answer4': 'Answer 4',
					'CorrectAnswer': 'A',
					'Description': 'Science Description'
					},
					{ 
    				'Number': 2,
					'Question': 'What is the second question?',
					'Answer1': 'Answer 1',
					'Answer2': 'Answer 2',
					'Answer3': 'Answer 3',
					'Answer4': 'Answer 4',
					'CorrectAnswer': 'B',
					'Description': 'Science Description'
					}];
	$scope.Math= { 
    				'Number': 1,
					'Question': 'What is the question?',
					'Answer1': 'Answer 1',
					'Answer2': 'Answer 2',
					'Answer3': 'Answer 3',
					'Answer4': 'Answer 4',
					'CorrectAnswer': 'A',
					'Description': 'Math Description'
					};
	$scope.Mathh= [{ 
    				Number: 1,
					Question: 'What is the question?',
					Answer1: 'Answer 1',
					Answer2: 'Answer 2',
					Answer3: 'Answer 3',
					Answer4: 'Answer 4',
					CorrectAnswer: 'A',
					Description: 'Math Description'
					},{ 
    				Number: 2,
					Question: 'What number is this question?',
					Answer1: 'Answer 1',
					Answer2: 'Answer 2',
					Answer3: 'Answer 3',
					Answer4: 'Answer 4',
					CorrectAnswer: 'B',
					Description: 'Second Question Description'
					}];
	$scope.Englishh= [{ 
    				Number: 1,
					Question: 'What is the question in English Exam?',
					Answer1: 'Answer 1',
					Answer2: 'Answer 2',
					Answer3: 'Answer 3',
					Answer4: 'Answer 4',
					CorrectAnswer: 'A',
					Description: 'English 1 Description'
					},{ 
    				Number: 2,
					Question: 'What number is this question in English Exam?',
					Answer1: 'Answer 1',
					Answer2: 'Answer 2',
					Answer3: 'Answer 3',
					Answer4: 'Answer 4',
					CorrectAnswer: 'B',
					Description: 'English Second Question Description'
					}];



	$scope.English= { 
    				'Number': 1,
					'Question': 'What is the question?',
					'Answer 1': 'Answer 1',
					'Answer 2': 'Answer 2',
					'Answer 3': 'Answer 3',
					'Answer 4': 'Answer 4',
					'Correct Answer': 'A',
					'Description': 'English Description'
					};
	$scope.Arts	= { 
    				'Number': 1,
					'Question': 'What is the question?',
					'Answer 1': 'Answer 1',
					'Answer 2': 'Answer 2',
					'Answer 3': 'Answer 3',
					'Answer 4': 'Answer 4',
					'Correct Answer': 'A',
					'Description': 'Arts Description'
					};



});