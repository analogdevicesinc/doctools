<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX31855  evaluation  kit  (EV  kit)  provides  the hardware and software (GUI) necessary to evaluate the MAX31855 cold-junction compensated thermocouple-todigital converter.

The  MAX31855  EV  kit  comes  with  a  MAX31855KASA+ soldered to the PCB. This is the K-type thermocouple version of the MAX31855. Other thermocouple types can be evaluated  by  procuring  the  desired  thermocouple,  thermocouple socket, and corresponding MAX31855. Contact the  factory  for  free  samples  of  the  MAX31855  to  match your desired thermocouple type. See the Evaluating Other Thermocouple Types section for part numbers and additional information regarding other thermocouple types.

## EV Kit Contents

- S Assembled Circuit Board Including MAX31855KASA+
- S Mini-USB Cable
- S K-Type Thermocouple

Ordering Information appears at end of data sheet.

## MAX31855 Evaluation Kit

## Evaluates: MAX31855

## Features

- S Includes Everything Needed to Evaluate a K-Type Thermocouple
- S EV Kit Hardware is USB Powered (USB Cable Included)
- S Windows XP ® , Windows Vista ® , and Windows ®  7 Operating Systems-Compatible Software
- S USB HID Interface
- S Graphical User Interface (GUI) Consists of a Single .EXE File
- S Second Channel Allows Easy Evaluation of Other Thermocouple Types
- S RoHS Compliant

## MAX31855 EV Kit Files

| FILE              | DESCRIPTION         |
|-------------------|---------------------|
| MAX31855EVkit.EXE | Application program |

Note:

The .EXE file is downloaded as a .ZIP file.

## MAX31855 EV Kit Board

<!-- image -->

Windows XP, Windows Vista, and Windows are registered trademarks of Microsoft Corp.

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Required Equipment

- PC with Windows XP, Windows Vista, or Windows 7 OS with a spare USB port
- K-type thermocouple (included)
- Mini-USB cable (included)
- EV kit hardware

## Procedure

Follow  the  steps  below  to  get  started  measuring  temperature  using  the  MAX31855  interfaced  to  a  K-type thermocouple.

- 1)  Connect  the  included  K-type  thermocouple  to  J2 (thermocouple  socket)  of  the  EV  kit  hardware.  One terminal of the thermocouple is wider than the other, ensuring proper polarity.
- 2)  Ensure that jumper/shunt J4 is installed and is selecting Channel 1.
- 3)  Set the EV kit hardware on a nonconductive surface that ensures nothing on the PCB gets shorted together.
- 4)  Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied mini-USB cable, or equivalent.  The  COM  LED  (D2)  should  flash  between  red and orange.
- 5)  Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore  does  not  require  a  unique/custom  device driver.  Once  the  driver  installation  is  complete,  a Windows  message  appears  near  the System  Icon menu indicating that the hardware is ready to use. Do not attempt to run the GUI prior to this message. If you do, you must close the application and restart it once the driver installation is complete. On some versions of Windows, Administrator privileges may be required to install the USB device.
- 6)  Go  to www.maximintegrated.com/MAX31855EVKIT to  download the latest version of the EV kit software, titled MAX31855EVkit.ZIP. Save the EV kit software to a temporary folder.
- 7)  Open  the  .ZIP  file  and  extract  the  .EXE  file  to  your desired location. The .EXE file is the actual EV kit GUI and not  an  install  program.  You  can  store  the  .EXE wherever you like and then uninstall it later by simply deleting the .EXE file.

## MAX31855 Evaluation Kit Evaluates: MAX31855

- 8)  Once the device driver installation is complete (from an earlier step), double-click the .EXE file to run the GUI.  A  message  box  stating The  publisher  could not be verified. Are you sure you want to run this software? may appear. If so, click Run .
- 9)  When the GUI appears, the EV Kit Status group box should indicate that the EV kit hardware is ready. Also, the COM LED (D2) should turn green.
3. 10)Click the Single Read button to read the temperature. A valid temperature should be displayed along with all four Alarm Status indicators remaining green. At this point, the EV kit and setup is fully functional and ready to begin evaluating the MAX31855. If any issues arise, see the Troubleshooting section.

## Detailed Description of Software

Figure 1 shows a screenshot of the MAX31855 GUI.

## EV Kit Status Section

On the right-hand side of the GUI is a section titled EV Kit Status .  It  is  used  to  indicate the status of the communication between the GUI and the EV kit hardware. If everything is working properly, a message indicates that the hardware is present and/or ready. Otherwise, EV Kit not found. is displayed.

## Thermocouple Type Section

The drop-down box in this section is used to select the thermocouple type installed on the EV kit hardware. See Table 1 for the list  of  possible  settings.  Out-of-the-box, the hardware contains a K-type version of the MAX31855 along with a K-type thermocouple and socket. Therefore, the  drop-down  box  defaults  to  the  K-type  setting.  The thermocouple type selection is used by the GUI to calculate the linearized temperature values.

## Table 1. Thermocouple Types and Sensitivities

| TYPE   |   SENSITIVITY (µV/ N C) |
|--------|-------------------------|
| K*     |                  41.276 |
| J      |                  57.953 |
| N      |                  36.256 |
| S      |                   9.587 |
| T      |                   52.18 |
| E      |                  76.373 |
| R      |                  10.506 |

* Default setting.

## MAX31855 Evaluation Kit Evaluates: MAX31855

Figure 1. MAX31855 EV Kit GUI

<!-- image -->

## Read from the MAX31855 Section

Interfacing  to  the  MAX31855  is  simple.  The  interface is  read-only  and  consists  of  one  32-bit  shift  register. When  the Single  Read button  is  pressed,  all  32  bits are  read,  parsed,  and  then  displayed.  The  raw  data read from the device is shown in both binary and hexadecimal format in the edit  boxes  labeled Raw B[31:0] . Furthermore,  the  four  fault  bits  are  analyzed  and  then their  states  are  indicated  in  the Alarm  Status section.  The Raw  Thermocouple  Temperature and Cold Junction Temperature edit  boxes  are  calculated.  And finally, the Linearized Thermocouple Temperature edit box  is  calculated  using  the  sensitivity  value  and  NIST coefficients to compensate for thermocouple nonlinearities. Refer to the MAX31855 IC data sheet for additional information.

## Multiple Reads Section

This section allows the user to enter a desired number of samples (temperature readings) as well as the delay between the samples (in milliseconds) in order to automate temperature readings. It is also possible to write the results to a file by clicking the Log to file checkbox and providing a folder and filename for the comma separated value (.CSV) file to be stored.

## Detailed Description of Hardware

The  MAX31855  EV  kit  hardware  provides  everything needed to evaluate a K-type thermocouple. In addition to a thermocouple and MAX31855, the hardware includes a  USB  interface  that  is  used  to  communicate  with  the PC-based software. An added feature is that the hardware is USB powered, meaning that no power supplies are needed .

## Thermocouple Channels

The EV kit hardware features two thermocouple channels. Channel 1 comes preconfigured with a MAX31855KASA+, K-type thermocouple, and thermocouple socket. A second channel is provided to make it easy to evaluate other thermocouple types. Channel 2 is almost fully populated, missing only the desired MAX31855 version, corresponding  thermocouple,  and  thermocouple  socket.  A  jumper (J4) is used to select the desired channel. The following section describes how to modify the hardware in order to evaluate other thermocouple types.

## MAX31855 Evaluation Kit Evaluates: MAX31855

## Evaluating Other Thermocouple Types

To use Channel 2, see Table 2 for the part numbers of the

three items required for the desired thermocouple type.

Once  the  three  items  have  been  procured,  carefully solder the Maxim device to the footprint labeled U3 and the  thermocouple  socket  to  the  footprint  labeled  J3. Obviously, make sure this is done with the board unpowered.  Move  the  jumper,  J4,  to  the  Channel  2  position. Finally, connect the thermocouple to the socket.

Reconnect  the  USB  cable  to  the  PC  and  then  run  the GUI.  Select  the  correct Thermocouple  Type from  the drop-down  box.  The  hardware  and  software  are  now ready to begin evaluation.

Description of Channel Selection Jumper The jumper,  J4,  is  used  to  select  the  desired  channel. See Table 3 for additional details.

Table 2. Items Required to Evaluate Other Thermocouple Types

| TYPE   | MAXIM PART    | THERMOCOUPLE*             | SOCKET*     |
|--------|---------------|---------------------------|-------------|
| K      | MAX31855KASA+ | 5SRTC-GG-K-24-36          | PCC-SMP-K-5 |
| J      | MAX31855JASA+ | 5SRTC-GG-J-24-36          | PCC-SMP-J-5 |
| N      | MAX31855NASA+ | NMQIN-010E-6 (unverified) | PCC-SMP-N-5 |
| S      | MAX31855SASA+ | -                         | -           |
| T      | MAX31855TASA+ | 5SRTC-GG-T-24-36          | PCC-SMP-T-5 |
| E      | MAX31855EASA+ | 5SRTC-GG-E-24-36          | PCC-SMP-E-5 |
| R      | MAX31855RASA+ | -                         | -           |

Table 3. MAX31855 EV Kit Jumper Description (J4)

| JUMPER   | JUMPER POSITION   | DESCRIPTION                                                                                               |
|----------|-------------------|-----------------------------------------------------------------------------------------------------------|
| J4       | 1-2*              | Selects Channel 1. The SO (serial out) pin of the Channel 1 MAX31855 is connected to the USB PC Interface |
| J4       | 2-3               | Selects Channel 2. The SO (serial out) pin of the Channel 2 MAX31855 is connected to the USB PC Interface |

## MAX31855 Evaluation Kit Evaluates: MAX31855

## Troubleshooting

All effort was made to ensure that each EV kit works on the first try directly out of the box. In the rare occasion that a problem is suspected, see the table below to help troubleshoot the issue.

| SYMPTOM                                                                                   | CHECK                            | SOLUTION                                                                                                                                                               |
|-------------------------------------------------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found.                                                              | Is the LED labeled D1 on?        | If yes, then the electronic fuse, U7, is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface. |
| GUI says hardware not found.                                                              | Are any of the LEDs illuminated? | If not, then the PCB may not be getting power from USB. Try a different USB cable or a different USB port.                                                             |
| GUI appears to work, but the raw data is all zeros.                                       | Jumper (J4)                      | Make sure jumper, J4, is installed and connected to the correct channel.                                                                                               |
| The 'Fault' and 'Open Circuit' indicators are red in the Alarm Status section of the GUI. | Is the thermocouple connected?   | Verify that the thermocouple is connected (to the cor- rect channel).                                                                                                  |

## MAX31855 Evaluation Kit Evaluates: MAX31855

Figure 2. MAX31855 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX31855 Evaluation Kit Evaluates: MAX31855

Figure 3. MAX31855 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX31855 Evaluation Kit Evaluates: MAX31855

Figure 4. MAX31855 EV Kit PCB Layout-Top

<!-- image -->

Figure 5. MAX31855 EV Kit PCB Layout-Bottom

<!-- image -->

| DESIGNATION          |   QTY | DESCRIPTION                                                      |
|----------------------|-------|------------------------------------------------------------------|
| C1, C5, C9, C10, C19 |     5 | 0.1 F F X7R ceramic capacitors (0805) Venkel C0805X7R160-104KNE  |
| C2, C6, C13          |     3 | 0.01 F F X7R ceramic capacitors (0805) Venkel C0805X7R250-103KNE |
| C3, C4, C7, C8, C14  |     0 | Do not populate (0805)                                           |
| C11, C12, C17, C18   |     4 | 1 F F X7R ceramic capacitors (0805) Venkel C0805X7R250-105KNE    |
| C15, C16             |     2 | 22pF ceramic capacitors (0805) Venkel C0805COG101-220KNP         |
| D1                   |     1 | Red LED (1206) Kingbright APT3216SURCK                           |
| D2                   |     1 | Red/green dual LED Kingbright BM2012SURKCGKC                     |
| J1                   |     1 | 5-pin, female Mini-USB 54819-0519                                |
| J2                   |     1 | K-type thermocouple socket Omega PCC-SMP-K-5-ROHS                |
| J3                   |     0 | Thermocouple socket Do not populate                              |
| J4                   |     1 | 1 x 2 header, 2.54mm pitch 22-28-4360                            |
| L1 - L4              |     4 | 470 I ferrite beads (0603) BLM18PG471SN1D                        |
| R1, R2, R3           |     3 | 24.9 I Q 1% resistors (0805) Venkel CR0805-10W-24R9FT            |
| R4, R8, R12          |     3 | 4.7k I Q 1% resistors (0805) Venkel CR0805-10W-4701FT            |
| R6, R7, R16          |     3 | 330 I Q 1% resistors (0805) Venkel CR0805-10W-3300FT             |

## MAX31855 Evaluation Kit

## Evaluates: MAX31855

## Component List

| DESIGNATION        | QTY   | DESCRIPTION                                                  |
|--------------------|-------|--------------------------------------------------------------|
| R10                | 1     | 1M I Q 1% resistor (0805) Venkel CR0805-10W-1004FT           |
| R11, R13, R14, R15 | 4     | 0 I Q 1% resistor (0805) Venkel CR0805-10W-000FT             |
| R5, R9             | 0     | Do not populate (0805)                                       |
| TP1, TP2, TP3      | 3     | White test points Keystone 5012                              |
| TP4 - TP8          | 5     | Black test points Keystone 5011                              |
| TP9, TP10          | 2     | Red test points Keystone 5010                                |
| TP11, TP12         | -     | Do not populate                                              |
| U1                 | 1     | Thermocouple-to-digital converter (8 SO) Maxim MAX31855KASA+ |
| U2, U4             | 2     | TVS diode (SOT-3) NUP2105TL1G                                |
| U3                 | 0     | MAX31855 Do not populate                                     |
| U5                 | 1     | PIC18LF2550-I/SO (28 SO)                                     |
| U6                 | 1     | Linear regulator (5 SOT23) Maxim MAX8868EUK33+               |
| U7                 | 1     | Current-limit switch (5 SC70) Maxim MAX4787EXK+              |
| X1                 | 1     | 20MHz, 20pF SMT crystal 403I35E20M00000                      |
| -                  | 1     | Jumper/shunt                                                 |
| -                  | 1     | Mini-USB cable                                               |
| -                  | 1     | K-type thermocouple Omega 5SRTC-GG-K-24-36-ROHS              |
| -                  | 1     | PCB: MAX31855 EV Kit                                         |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE        |
|-------------------------|--------------|----------------|
| Omega Engineering, Inc. | 888-826-6342 | www.omega.com  |
| Venkel Ltd.             | 800-950-8365 | www.venkel.com |

Note: Indicate that you are using the MAX31855 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31855EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

## MAX31855 Evaluation Kit Evaluates: MAX31855

## MAX31855 Evaluation Kit Evaluates: MAX31855

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/11           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## MAX31855 Evaluation Kit