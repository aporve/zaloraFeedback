let feedback;
let data = {};
let feedback2;



// if(feedback2 !== '') {
//     console.error(feedback2, "feedback2");
// }


function good() {
    $("#dropdown").hide();
    $("#textArea").show();
    document.getElementById('feedback').focus();
    feedback = 'good';
    console.error("feedback ----->", feedback );
}

function bad() {
    $("#textArea").hide();
    $("#dropdown").show();
    document.getElementById('feedback').focus();
    feedback = 'bad';
    console.error( "feedback ----->", feedback);
}



function details() {
    submitDetails = document.getElementById('feedback').value;
    data.feedback = feedback;
    data.submitDetails = submitDetails;
    console.error("Data", data);
    console.log("Data", data);
    // $("#main1").hide();
    // $("#form").hide();
    $("#main2").show();

    feedback2 = document.getElementById("feedback2").value;
    console.error(feedback2, "feedback2");
    if(feedback2 == 'f7') {
        $("#dropdown").hide();
        $("#textArea").show();
    }
   

    document.getElementById('feedback').value = ''
    $("#form").trigger("reset");
    
    var feedbackDetails = {}
    var raw = JSON.stringify({
        "details": {
        "companyName": "ZALORA",
        "feedback-emoji": feedback,
        "user-feedback": document.getElementById('feedback').value
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
