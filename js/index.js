let feedback;
let data = {};
let feedback2;
let radioFeedback;


function good() {
    feedback = 'good';
    console.error("feedback ----->", feedback );
}

function bad() {
    $('#emotican').hide();
    $("#textArea").hide();
    $("#dropdown").show();
    document.getElementById('feedback').focus();
    feedback = 'bad';
    console.error( "feedback ----->", feedback);
}

function triggerText(value) {
    // alert(' trigger text area')
    radioFeedback = $('input[name="reason"]:checked').val();
    // value = document.getElementById(value).value;
    console.error('radioFeedback --->',radioFeedback);
   
    if(value == 'F6') {
        $("#dropdown").hide();
        $("#textArea").show();
        $("#textArea").css('margin-top', '50px')
    }


    //  feedback2 = document.getElementById("feedback2").value;
    //     console.error(feedback2, "feedback2");
    //     if(feedback2 == 'F1') {
    //         $("#dropdown").hide();
    //         $("#textArea").show();
    //     }
   
}



function details() {
    submitDetails = document.getElementById('feedback').value;
    data.feedback = feedback;
    data.radioButtonValue = radioFeedback
    data.submitDetails = submitDetails;
    console.error("Data", data);
    console.log("Data", data);

    // $("#main2").show();
    // feedback2 = document.getElementById("feedback2").value;
    // console.error(feedback2, "feedback2");
    // if(feedback2 == 'f7') {
    //     $("#dropdown").hide();
    //     $("#textArea").show();
    // }
   

    document.getElementById('feedback').value = ''
    $("#form").trigger("reset");
    
    var feedbackDetails = {}
    var raw = JSON.stringify({
        "details": {
        "companyName": "ZALORA",
        "feedback-emoji": feedback,
        "RadioValue": radioFeedback
        }
    });

    feedbackDetails.data = raw;
    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event', data: JSON.stringify({
            event: {
            code: "feedback",
            data: feedbackDetails,
        
            }
        })
    }), '*');

    console.log("Feedback Details ---->",feedbackDetails);
}
