$('document').ready(function(){
	$('#btnSubmitForm').hide();
 	$('#toogleValidationEmployee')
	    .formValidation({
	        framework: 'bootstrap',
	        // Only disabled elements are excluded
	        // The invisible elements belonging to inactive tabs must be validated
	        // excluded: [':disabled'],
	        excluded: [':hidden' , ':disabled'],
	        icon: {
	            // valid: 'glyphicon glyphicon-ok',
	            // invalid: 'glyphicon glyphicon-remove',
	            // validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            employeeNo: {
	              validators: {
	                notEmpty: {
	                  message: "The employee's number is required"
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            file: {
	              validators: {
	              	notEmpty: {
                        message: 'Picture is required and can\'t be empty'
                    },
                    promise: {
                    promise: function(value, validator, $field) {
                        var dfd   = new $.Deferred(),
                            files = $field.get(0).files;

                        if (!files.length || typeof FileReader === 'undefined') {
                            dfd.resolve({ valid: true });
                            return dfd.promise();
                        }
                        var img = new Image();
                        img.onload = function() {
                            var w = this.width,
                                h = this.height;

                            dfd.resolve({
                                valid: (w <= 1500 && h <= 1500),
                                message: 'The avatar width and height must be less than 1500 px',
                                source: img.src,    // We will use it later to show the preview
                                width: w,
                                height: h
                            });
                        };
                        img.onerror = function() {
                            dfd.reject({
                                message: 'Please choose an image'
                            });
                        };

                        var reader = new FileReader();
                        reader.readAsDataURL(files[0]);
                        reader.onloadend = function(e) {
                            img.src = e.target.result;
                        };

                        return dfd.promise();
                    }
                    }      
	              }
	            },
	            empLastName: {
	              validators: {
	              	regexp: { 
                        regexp: /^[a-z\s]+$/i,
                        message: 'Last name can consist of alphabetical characters and spaces only'
                    },
	                notEmpty: {
	                  message: "The employee's last name is required"
	                }
	              }
	            },
	            license: {
	              validators: {
	                notEmpty: {
	                  message: "The employee's license is required"
	                }
	              }
	            },
	            dateHired: {
	              validators: {
	                notEmpty: {
	                  message: "Date hired is required"
	                }
	              }
	            },
	            staffMajor: {
	              validators: {
	                notEmpty: {
	                  message: "Major in Teaching is required"
	                }
	              }
	            },
	            empFirstName: {
	              validators: {
	              	regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'First name can consist of alphabetical characters and spaces only'
                    },
	                notEmpty: {
	                  message: "The employee's first name is required"
	                }
	              }
	            },
	            empMiddleName: {
	              validators: {
	              	regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'Middle name can consist of alphabetical characters and spaces only'
                    },
	                notEmpty: {
	                  message: "The employee's middle name is required"
	                }
	              }
	            },
	            gender: {
	              validators: {
	                notEmpty: {
	                  message: "The employee's gender is required"
	                }
	              }
	            },
	            religion: {
	              validators: {
	                notEmpty: {
	                  message: 'The employee religion is required'
	                }
	              }
	            },
	            empNationality: {
	              validators: {
	                notEmpty: {
	                  message: 'The employee nationality is required'
	                }
	              }
	            },
	            empHeight: {
	              validators: {
	                notEmpty: {
	                  message: 'The employee height is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            empWeight: {
	              validators: {
	                notEmpty: {
	                  message: 'The employee weight is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            empMobile: {
	              validators: {
	                numeric: {
	                  message: 'This is not a valid number'
	                },
	                stringLength: {
	                  max: 10,
	                    min: 10,
	                      message: 'The number must be 10 digits'
	                }
	              }
	            },
	            maritalStatus: {
	              validators: {
	                notEmpty: {
	                  message: 'The employee marital status is required'
	                }
	              }
	            },
	            empType: {
	              validators: {
	                notEmpty: {
	                  message: "The employee's employment type is required"
	                }
	              }
	            },

	            vacLeave: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's max vacation vacLeave is required"
	                },
	                between: {
	                  max: 30,
	                    min: 0,
	                      message: 'The number must be between 0 and 30'
	                }
	              }
	            },
	            sickLeave: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's max sick leave is required"
	                },
	                between: {
	                  max: 30,
	                    min: 0,
	                      message: 'The number must be between 0 and 30'
	                }
	              }
	            },
	            maternalLeave: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's max maternal leave is required"
	                },
	                between: {
	                  max: 120,
	                    min: 0,
	                      message: 'The number must be between 0 and 120'
	                }
	              }
	            },
	            pagibig: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's Pag-ibig no. is required"
	                }
	              }
	            },
	            philhealth: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's Philhealth no. is required"
	                }
	              }
	            },
	            sss: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's SSS no. is required"
	                }
	              }
	            },
	            tin: {
	              validators: {
	              	numeric: {
	              	  message: 'This is not a valid number'
	              	},
	                notEmpty: {
	                  message: "The employee's TIN no. is required"
	                }
	              }
	            },
	            user_name: {
					validators: {
						notEmpty: {
							message: "Username is required"
						}
					}
	            },
	            password: {
					validators: {
						notEmpty: {
							message: "Password is required"
						}
					}
	            },
	            empEmail: {
					validators: {
						notEmpty: {
							message: "Email Address is required"
						},
						emailAddress: {
                            message: 'This is not a valid email address'
                        }
					}
	            },
	            email_address: {
                    validators: {
                    	notEmpty: {
							message: "Email Address is required"
						},
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'The value is not a valid email address'
                        }
                    }
                },
     		 	staffDepartment: {
					validators: {
						notEmpty: {
							message: "Employee Department is required"
						}
					}
	            },
	            empPayRate: {
	              validators: {
	                notEmpty: {
	                  message: 'The pay rate is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	      		employeeUnitNumber: {
	              validators: {
	                notEmpty: {
	                  message: 'Present unit number is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            employeeHouseNumber: {
	              validators: {
	                notEmpty: {
	                  message: 'Present House/Bldg/Street Number is required'
	                }
	              }
	            },
	            employeeStreetName: {
	              validators: {
	                notEmpty: {
	                  message: 'Present Street Name is required'
	                }
	              }
	            },
	            employeeBrgyName: {
	              validators: {
	                notEmpty: {
	                  message: 'Present Barangay/District Name is required'
	                }
	              }
	            },
	            employeeCity: {
	              validators: {
	                notEmpty: {
	                  message: 'Present City/Municipality is required'
	                }
	              }
            	},
	            landLineNo: {
	              validators: {
	                empty: {
	                    message: 'The mobile number is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                },
	                stringLength: {
	                  max: 7,
	                    min: 7,
	                      message: 'The number must be 7 digits'
	                }
	              }
	            },
	            employeeUnitNumber1: {
	              validators: {
	                notEmpty: {
	                  message: 'Permanent unit number is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            employeeHouseNumber1: {
	              validators: {
	                notEmpty: {
	                  message: 'Permanent House/Bldg/Street Number is required'
	                }
	              }
	            },
	            employeeStreetName1: {
	              validators: {
	                notEmpty: {
	                  message: 'Permanent Street Name is required'
	                }
	              }
	            },
	            employeeBrgyName1: {
	              validators: {
	                notEmpty: {
	                  message: 'Permanent Barangay/District Name is required'
	                }
	              }
	            },
	            employeeCity1: {
	              validators: {
	                notEmpty: {
	                  message: 'Permanent City/Municipality is required'
	                }
	              }
            	},
	            permanentLandLine: {
	              validators: {
	                empty: {
	                    message: 'The mobile number is required'
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                },
	                stringLength: {
	                  max: 7,
	                    min: 7,
	                      message: 'The number must be 7 digits'
	                }
	              }
	            },
	            fathersName: {
	              validators: {
	                notEmpty: {
	                  message: "The father's name is required"
	                }
	              }
	            },
	            mothersName: {
	              validators: {
	                notEmpty: {
	                  message: "The mother's name is required"
	                }
	              }
	            },
	            spouseName: {
	              validators: {
	                notEmpty: {
	                  message: "The spouse name is required"
	                }
	              }
	            },
	            // 'dependentName[]': {
	            //   validators: {
	            //     regexp: {
             //            regexp: /^[a-z\s]+$/i,
             //            message: 'This is not a valid name'
             //        },
	            //   }
	            // },
	            // childsName: {
	            //   validators: {
	            //     notEmpty: {
	            //       message: "The child's name is required"
	            //     }
	            //   }
	            // },
	            guardiansAdd: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's address is required"
	                }
	              }
	            },
	            guardiansGender: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's gender is required"
	                }
	              }
	            },
	            guardiansDOB: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's date of birth is required"
	                }
	              }
	            },
	            guardiansMobile: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's mobile is required"
	                },
	                numeric: {
	                  message: 'This is not a valid mobile number'
	                }
	              }
	            },
	            guardiansOccupation: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's occupation is required"
	                }
	              }
	            },
	            guardiansRelStud: {
	              validators: {
	                notEmpty: {
	                  message: "The guardians's relationship to student is required"
	                }
	              }
	            },
	            schoolyear: {
	              validators: {
	                notEmpty: {
	                  message: "School Year is required"
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            admissionDate: {
	              validators: {
	                notEmpty: {
	                  message: "Admission Date Year is required"
	                }
	              }
	            },
	            admissionNo: {
	              validators: {
	                notEmpty: {
	                  message: "Admission Number is required"
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            enrollmentNo: {
	              validators: {
	                notEmpty: {
	                  message: "Enrollment Number is required"
	                },
	                numeric: {
	                  message: 'This is not a valid number'
	                }
	              }
	            },
	            section: {
	              validators: {
	                notEmpty: {
	                  message: "Section is required"
	                }
	              }
	            },
	            gradelvl: {
	              validators: {
	                notEmpty: {
	                  message: "Grade Level is required"
	                }
	              }
	            },
	            password: {
					validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        callback: {
                            callback: function(value, validator, $field) {
                                var score = 0;

                                if (value === '') {
                                    return {
                                        valid: true,
                                        score: null
                                    };
                                }

                                // Check the password strength
                                score += ((value.length >= 8) ? 1 : -1);

                                // The password contains uppercase character
                                if (/[A-Z]/.test(value)) {
                                    score += 1;
                                }

                                // The password contains uppercase character
                                if (/[a-z]/.test(value)) {
                                    score += 1;
                                }

                                // The password contains number
                                if (/[0-9]/.test(value)) {
                                    score += 1;
                                }

                                // The password contains special characters
                                if (/[!#$%&^~*_]/.test(value)) {
                                    score += 1;
                                }

                                return {
                                    valid: true,
                                    score: score    // We will get the score later
                                };
                            }
                        }
                    }
	            },
	            
	        }
	    })
	    .on('err.field.fv', function(e, data) {
	      // data.fv --> The FormValidation instance

	      // Get the first invalid field
	      var $invalidFields = data.fv.getInvalidFields().eq(0);

	      // Get the tab that contains the first invalid field
	      var $tabPane     = $invalidFields.parents('.tab-pane'),
	          invalidTabId = $tabPane.attr('id');

	      // If the tab is not active
	      if (!$tabPane.hasClass('active')) {
	          // Then activate it
	          $tabPane.parents('.tab-content')
	                  .find('.tab-pane')
	                  .each(function(index, tab) {
	                      var tabId = $(tab).attr('id'),
	                          $li   = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();

	                      if (tabId === invalidTabId) {
	                          // activate the tab pane
	                          $(tab).addClass('active');
	                          // and the associated <li> element
	                          $li.addClass('active');
	                      } else {
	                          $(tab).removeClass('active');
	                          $li.removeClass('active');
	                      }
	                  });

	          // Focus on the field
	          $invalidFields.focus();
	      }



	    })
	    .on('success.validator.fv', function(e, data) {
            // The password passes the callback validator
            if (data.field === 'password' && data.validator === 'callback') {
                // Get the score
                var score = data.result.score,
                    $bar  = $('#passwordMeter').find('.progress-bar');

                switch (true) {
                    case (score === null):
                        $bar.html('').css('width', '0%').removeClass().addClass('progress-bar');
                        break;

                    case (score <= 0):
                        $bar.html('Very weak').css('width', '25%').removeClass().addClass('progress-bar progress-bar-danger');
                        break;

                    case (score > 0 && score <= 2):
                        $bar.html('Weak').css('width', '50%').removeClass().addClass('progress-bar progress-bar-warning');
                        break;

                    case (score > 2 && score <= 4):
                        $bar.html('Medium').css('width', '75%').removeClass().addClass('progress-bar progress-bar-info');
                        break;

                    case (score > 4):
                        $bar.html('Strong').css('width', '100%').removeClass().addClass('progress-bar progress-bar-success');
                        break;

                    default:
                        break;
                }
            }
        })

	    .bootstrapWizard({
	        tabClass: 'nav nav-pills',
	        onTabClick: function(tab, navigation, index) {
	            return validateTab(index);
	        },
	        onNext: function(tab, navigation, index) {
	            var numTabs    = $('#toogleValidationEmployee').find('.tab-pane').length,
	                isValidTab = validateTab(index - 1);
	            if (!isValidTab) {
	                return false;
	            }

	            return true;
	        },
	        onPrevious: function(tab, navigation, index) {
	            return validateTab(index + 1);
	        },
	        onTabShow: function(tab, navigation, index) {
	            // Update the label of Next button when we are at the last tab
	            var numTabs = $('#toogleValidationEmployee').find('.tab-pane').length;
	            var btnSubmit = $('#btnSubmitForm');
	            $('#toogleValidationEmployee')
	                .find('.next')
	                .removeClass('disabled')    // Enable the Next button
	                .find('a');
	                if(index === (numTabs - 1) ){
	                  $('#btnNext').hide();
	                  $('#btnSubmitForm').show();
	                  document.getElementById('tab1').style.pointerEvents='auto';
	                  document.getElementById('tab2').style.pointerEvents='auto';
	                  document.getElementById('tab3').style.pointerEvents='auto';
	                  document.getElementById('tab4').style.pointerEvents='auto';
	                  document.getElementById('tab5').style.pointerEvents='auto';
	                  document.getElementById('tab6').style.pointerEvents='auto';
	                  document.getElementById('tab7').style.pointerEvents='auto';
	                  document.getElementById('tab8').style.pointerEvents='auto';
	                }
	                else{
	                  $('#btnNext').show();
	                  $('#btnSubmitForm').hide();
	                }
	            

	        }
	    });




	    function validateTab(index) {
	      var fv   = $('#toogleValidationEmployee').data('formValidation'), // FormValidation instance
	          // The current tab
	          $tab = $('#toogleValidationEmployee').find('.tab-pane').eq(index);

	      // Validate the container
	      fv.validateContainer($tab);

	      var isValidStep = fv.isValidContainer($tab);
	      if (isValidStep === false || isValidStep === null) {
	          // Do not jump to the target tab
	          return false;
	      }

	      return true;
	    }

    $('#btnSubmitForm').click(function(e){
      e.preventDefault();
      swal({
        title: "Are you sure?",
        text: "You are trying to save the event.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm){
        if(isConfirm){
          $.ajax({
            type: 'POST',
            url: "/hr/save_employee",
            processData : false,
            contentType : false,
            headers:{'X-CSRF-Token': $('input[name="_token"]').val()},
            data: new FormData($("#toogleValidationEmployee")[0]),
            success: function(data){
            	console.log(data.error);
				if(data.success == "Successfully Saved!"){
					$('#btnNext').show();
					$('#btnSubmitForm').hide(); 
					swal("Saved!", "The employee has been saved.", "success");  
					$('#myTabs a[href="#personalInfo"]').tab('show');  
				}else if(data.error == "Email Address or Role already exists!"){
					swal("Error!", "Email Address or Role already exists!", "error");
				}else if(data.error == "Employee Exists!"){
					swal("Error!", "Employee Already Exists", "error");
				}
            }, error: function(){
            	swal("Something went wrong!");
            }
          });
        }
        else {
          swal("Cancelled", "Error Occured while enrolling ", "error");
        }
      });
     
    });
   
});

