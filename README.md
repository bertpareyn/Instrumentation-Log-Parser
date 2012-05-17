Instrumentation Log Parser
==========================

Calculates averages and produces a single object that can be used for graphing results. This was created to speed up the processing of the UI Instrumentation logs.

The instrumentation branch produces logs in the form of:

{
    "name": [],
    "timetaken": [],
    "totaltime": []
}

To feed it to the parser wrap it in an array in the 'results' object.

"results": [
    {
        "name": [],
        "timetaken": [],
        "totaltime": []
    },
    {
        "name": [],
        "timetaken": [],
        "totaltime": []
    }
}

The output is one object and looks like:

{
    "name": [],
    "avgtimetaken": [],
    "avgtotaltime": []
}