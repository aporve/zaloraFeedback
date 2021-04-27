let feedback;
let data = {};
let feedback2;
let radioFeedback;
let textareaValue ;


function good() {
    feedback = 'good';
    $('#emotican').hide();
    $("#textArea").show();
    $("#textArea").css('margin-top', '50px')
    $('#submitBtn').show();
    console.error("feedback ----->", feedback );

}

function bad() {
    $('#emotican').hide();
    $("#textArea").hide();
    $("#dropdown").show();
    $('#submitBtn').show();
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
        $('#submitBtn').show();
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

    textareaValue = document.getElementById('feedback').value;
    console.error('TextArea Value---->',textareaValue)

    var feedbackDetails = {}
    var raw = JSON.stringify({
        "details": {
        "companyName": "ZALORA",
        "feedbackEmoji": feedback,
        "radioValue": radioFeedback,
        "textareaValue" : textareaValue
        }
    });

    document.getElementById('feedback').value = ''
    $("#form").trigger("reset");
    
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
