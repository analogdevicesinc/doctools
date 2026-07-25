<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## FEATURES

## DS2438EVKIT+ Smart Battery Monitor Evaluation Kit

## EVALUATION KIT CONTENTS

-  Demonstrates the Capabilities of the DS2438 Smart Battery Monitor, Including:
-  Temperature Measurement
-  Current Measurement
-  Voltage Measurement
-  Current Accumulation
-  Information Storage
-  Elapsed Time
-  Identification
-  Provides Small-Volume DS2438 Programming Support
-  Interfaces to the USB Port of a PC Running Windows XP ® or Older Operating System

## INDEX

Evaluation Kit Contents

Equipment Needed

Introduction

Setup and Installation

Selecting the COM Port

Real-Time Meters

Setting the Elapsed-Time Meter

End-of-Charge and Disconnect Timestamps

Calibrating Current Measurements

Setting the Current Accumulators

Status/Configuration Register

Data Logging

Nonvolatile (NV) Memory

Evaluation Board Schematic

## INTRODUCTION

The DS2438 evaluation kit (EV kit) makes performance evaluation, software development, and prototyping with the DS2438 smart battery monitor easy. The evaluation board interfaces to a PC through a DS9123O USB adapter and RJ-11 cable connection. All related data sheets can be found on our website at www.maxim-ic.com.

Resistor R1 on the evaluation board is a 50m  current sense resistor. Resistor R2 and capacitor C1 implement the VSENS-  lowpass  filter  recommended  by  the  DS2438  data  sheet.  Component  site  R3,  which  is  intentionally unpopulated,  allows  another  sense  resistor  to  be  soldered  down  in  parallel  with  or  in  place  of  resistor  R1. Component site C3, intentionally unpopulated, allows a capacitor to be connected to the VAD input if needed.

The evaluation board can be connected to a power supply and an external load in configurations that simulate either charging or discharging for the DS2438. Figure 1a below illustrates the charging configuration while Figure 1b shows the discharging configuration.

Windows XP is a registered trademark of Microsoft Corp.

1 pc. Evaluation Board

1 pc. DS9123O USB Port Adapter

1 pc. RJ-11 Cable

## EQUIPMENT NEEDED

1. A PC running Windows XP or older operating system and an available USB port.
2. Cables with mini-grabber style clips or the ability to solder directly to connection pads.
3. A lithium-ion (Li+) battery and a power supply and/or load circuit.

## ORDERING INFORMATION

+ Denotes lead(Pb)-free and RoHS compliant.

| PART         | TYPE   |
|--------------|--------|
| DS2438EVKIT+ | EV Kit |

## Figure 1. Connections to Simulate Charging or Discharging

Figure 1a. Charging

<!-- image -->

## SETUP AND INSTALLATION

Before starting the demonstration, connect the evaluation board to a power supply and a load as shown in Figure 1a or Figure 1b. Also, be sure that the evaluation board is connected to the DS9123O through the RJ-11 cable and that the DS9123O is plugged into a USB port on the computer.

To install the DS2438 EV kit software, download the latest revision from our website at www.maxim-ic.com. Unzip the compressed folder and double-click the SETUP.EXE icon to begin the installation process. Follow the prompts to complete the installation. The DS2438 EV kit software can be uninstalled in the Add/Remove Programs tool in the  Control  Panel.  After  the  installation  is  complete,  open  the  DS2438K  folder  and  run  DS2438K.EXE or select DS2438K from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded.

## SELECTING THE COM PORT

The first time the software runs, the Select Preferences window may appear. In this window, select either serial port  or  USB  communication  and  the  port  number;  then  hit  OK.  The  DS2438  EV  kit  software  saves  this  port selection and automatically uses the selection each time the program starts. To change the port later, click the Preferences  option  on  the  menu  bar,  select  Port  Settings,  and  then  select  the  appropriate  port.  To  attempt  to automatically locate the DS9123, click the Poll Ports button. Warning: automatically polling for the DS9123 can disrupt other devices connected to your computer's COM ports.

<!-- image -->

Fig 1b. Discharging

<!-- image -->

## REAL-TIME METERS

The  Meters  Screen  displays  the  latest  real-time  measurements  of  battery  voltage,  temperature,  current  and remaining capacity (ICA) with both analog meter readouts and digital values. Also displayed on the Meters Screen are the values in the Charge Current Accumulator (CCA), Discharge Current Accumulator (DCA), Elapsed Time Meter, Disconnect (DIS) Timestamp Register, End-of-Charge (EOC) Timestamp Register, and Status Register. The 64-bit ROM ID of the DS2438 is also displayed at the bottom right portion of this screen.

<!-- image -->

## SETTING THE ELAPSED TIME METER

The Elapsed Time Meter (ETM) in the DS2438 is a 32-bit seconds counter that starts counting from zero when a power supply is connected to the part. The DS2438 EV kit software reads this 32-bit value and formats it into years, days,  hours,  minutes,  and  seconds.  To  set  the  ETM,  press  the  Set  Elapsed  Time  button  and  then  enter  the appropriate  years,  days,  hours,  minutes  and  seconds  information  in  the  Set  Elapsed  Time  Meter  window.  The evaluation kit software reformats this information into a 32-bit binary value and writes that value to the DS2438. Pressing the Reset button in the Set Elapsed Time Meter window clears ETM fields.

<!-- image -->

## END-OF-CHARGE AND DISCONNECT TIMESTAMPS

To demonstrate the DS2438's end-of-charge timestamp, wire the evaluation board in the charging configuration shown in Figure 1a, start the demonstration, and then disconnect one side of the load resistor (BAT- or PACK-). As  soon  as  this  is  done,  the  end-of-charge  Timestamp  Register  updates  to  reflect  the  end-of-charge  time.  To demonstrate the disconnect timestamp feature, simply unplug the RJ-11 cable from the evaluation board. During the time the cable is unplugged, the displayed values of the Elapsed Time Meter and both Timestamp Registers become  invalid  because  the  software  is  not  able  to  communicate  with  the  DS2438.  When  the  RJ-11  cable  is plugged back in, the software updates the displayed values to reflect the contents of the DS2438, including the new Disconnect Timestamp Register value.

## CURRENT MEASUREMENT CALIBRATION

The  Calibrate  Current  button  on  the  Meters  Screen  opens  the  Calibrate  Current  Measurement  window.  This window gives a real-time demonstration of how current measurements are acquired, corrected and reported using the DS2438. First, the DS2438 takes an uncorrected measurement of the voltage drop across the current sense resistor. The DS2438 then adds the contents of the Offset Register to the uncorrected current measurement and writes the corrected result to the Current Register. The host system  then divides the voltage value in the Current Register by the value of the sense resistor to obtain the measured current.

<!-- image -->

To calibrate DS2438 current measurements for offset error, follow these steps:

1. Press the Calibrate Current button in the Meters Screen.
2. Reduce the actual current driven through the sense resistor to zero.
3. Set the Offset Register value to 0 and press the Apply button.
4. Set the Offset Register value to -1 times the observed Uncorrected Current value and press the Apply button.
5. This uncorrected current value is the DS2438's offset error.
5. The Current Register line should now be reporting 0 LSb, 0mV.

To calibrate DS2438 current measurements for sense resistor variation and the effects of trace resistance, follow these steps:

6. Force a known current through the sense resistor.
7. Enter a different sense resistor value and click the Apply button.
8. Repeat step 7 until the Current reading shown by the software equals the actual current being forced.
9. Click the OK button to leave the Calibrate Current Measurement window. The DS2438 should now be correctly calibrated, and the Current Meter on the Meters Screen should now show the actual current flowing through the sense resistor.

## SETTING THE CURRENT ACCUMULATORS

The Set Accumulators button on the Meters Screen opens the Set Accumulators window. This window allows the user  set  the  values  of  the  ICA,  CCA  and  DCA  Registers  and  configure  accumulator-related  items.  The  value entered in the Nominal Battery Capacity field becomes the full-scale reading of the Capacity Meter on the Meters Screen.  The  Threshold  Register  setting  configures  the  DS2438  to  only  accumulate  currents  above  a  particular threshold.

To set the values of the ICA, CCA and DCA, enter the decimal value to be stored in the register and then press the Apply button. The DS2438 EV kit software multiples the entered value by the value of an LSb in units of mAhrs (calculated  from  the  sense  resistor  value  entered  in  the  Calibrate  Current  Measurement  window)  to  obtain  the value of the register in units of mAhrs. If any of the ICA, CCA or DCA Registers are disabled by Status Register settings, their values cannot be set in the Set Accumulators window.

<!-- image -->

## STATUS/CONFIGURATION REGISTER

The DS2438 has four bits in its Status/Configuration Register that can affect the operation of the part. To change the values of the bits, left-click on the Status/Configuration item of the Registers menu  to  open  the Status/Configuration Register window. When the Current A/D Control Bit (IAD) is set to 'Disabled,' Current, ICA, CCA and DCA functions are disabled in the DS2438 and on the Meters Screen. When the Current A/D Control Bit is set to 'Enabled' and the Current Accumulator Configuration Bit (CA) is set to 'Disabled,' only the CCA and DCA Registers are disabled in the DS2438 and on the Meters Screen. The Current Accumulator Shadow Selector Bit (EE) controls whether or not the DS2438 copies changes in the CCA and DCA Registers to EEPROM memory or not. The Voltage A/D Input Select Bit (AD) configures the DS2438 to use either the VDD pin or the VAD pin as input for voltage A/D conversion. The currently selected input is indicated next to the Voltage Meter on the Meters Screen.

<!-- image -->

## REAL-TIME GRAPHS

The Graphs Screen in the DS2438 EV kit software displays the last 500 real-time measurements of battery voltage, temperature, current and remaining capacity. The Clear button erases all the data in the graphs.

<!-- image -->

The Log to File Sub Tab contains control information for storing all data to an ASCII file. The default filename is c:\DS2438K\_datalog.txt, but can be modified in the filename text field. The Log Data button toggles data logging off and on. Data will be stored at the same interval selected for updating the graphs in the tab-delimited format of

'Time &lt;tab&gt; Voltage &lt;tab&gt; Current &lt;tab&gt; Temperature &lt;tab&gt; ICA &lt;tab&gt; CCA &lt;tab &gt;DCA

for  easy  import  into  a  spreadsheet.  The  most  recent  50  samples  are  displayed  in  the  window  for  observation. Warning: the Log Data function overwrites previous file information. Data previously stored in the file will be lost.

## NONVOLATILE MEMORY

The Memory Screen in the DS2438 EV kit software (shown in Figure 4) allows the user to read and program the EEPROM memory in  the  DS2438.  Memory  pages  3  through  6  are  general  purpose  data  storage  that  can  be programmed and read at any time. The upper 4 bytes of Page 7 are only accessible when the CCA and DCA are disabled via the IAD or CA bits in the Status/Configuration Register. To display the contents of DS2438 memory, press  the  Read  Memory  button.  To  program  DS2438  memory,  enter  the  desired  data  and  press  the  Program Memory button.

<!-- image -->

Saving and Opening Data Sets. To save a particular set of data to a file for future use, click File in the menu bar, select Save, and specify a file name. To load a data set from a file, click File in the menu bar, select Open, and select the file.

## EVALUATION BOARD SCHEMATIC

<!-- image -->

## REVISION HISTORY

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 040307          | Initial release.                                                                                                                                                           | -               |
|                 1 | 8/09            | Changed the ordering part number from DS2438K to DS2438EVKIT+; deleted references to DS2438K software CD and added where the software can be downloaded from the Internet. | 1, 2            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.