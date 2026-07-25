<!-- lastmod 2022-08-03 -->
## MAX31850/MAX31851 Evaluation Kit

## General Description

The  MAX31850/MAX31851  evaluation  kit  (EV  kit)  provides the hardware and software graphical user interface (GUI)  necessary  to  evaluate  the  MAX31850/MAX31851 cold-junction  compensated,  1-Wire ®   thermocouple-todigital converter.

The EV kit comes with a MAX31850KATB+ soldered to the PCB. This is the K-type thermocouple ver  sion of the device.  Other  thermocouple  types  can  be  evaluated  by procuring the desired thermocouple, ther  mocouple socket, and corresponding MAX31850 or MAX31851. Contact the factory for free samples of the devices to match your desired  thermocouple  type.  See  the Evaluating  Other Thermocouple Types section for part numbers and additional information regarding other thermocouple types.

## EV Kit Contents

- Assembled Circuit Board Including MAX31850K
- Micro-USB Cable
- K-Type Thermocouple

## MAX31850/MAX31851 EV Kit Board

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Includes Everything Needed to Evaluate a MAX31850K with a K-Type Thermocouple
- EV Kit Hardware is USB Powered (USB Cable Included)
- Windows XP ® - and Windows ®  7-Compatible Operating System Software
- USB HID Interface
- Second Channel Allows Easy Evaluation of Other Thermocouple Types
- Fully Assembled and Tested on Proven PCB Layout
- RoHS Compliant

## MA31850/MAX31851 EV Kit Files

| FILE                      | DESCRIPTION         |
|---------------------------|---------------------|
| MAX31850_51EVKitSetup.EXE | Application Program |

Note: The .EXE is downloaded as a .ZIP file.

Ordering Information appears at end of data sheet.

## Evaluates: MAX31850/MAX31851

<!-- image -->

## MAX31850/MAX31851 Evaluation Kit

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                |
|------------------------|-------|--------------------------------------------|
| C1, C5, C203, C214     |     4 | 0.01µF ceramic capacitors (0805)           |
| C2, C3, C6, C7, C215   |     0 | Do not populate, ceramic capacitors (0805) |
| C4, C8, C212           |     3 | 0.1µF ceramic capacitors (0805)            |
| C201, C202, C204       |     3 | 10µF ceramic capacitors (0805)             |
| C211                   |     1 | 1.0µF ceramic capacitor (0805)             |
| C213                   |     1 | 0.22µF ceramic capacitor (0805)            |
| D20, D21               |     2 | Red/green dual LEDs                        |
| D22                    |     1 | Schottky diode                             |
| J20                    |     1 | 5-pin female Micro-USB connector           |
| J21                    |     0 | Do not populate, 2-pin header              |
| JP1-JP12               |    12 | 3-pin (1 x 3) headers, 2.54mm pitch        |
| L1-L4                  |     4 | 470Ω ferrite beads (0603) BLM18PG471SN1D   |
| M200                   |     1 | 30V, 1.2ApMOS (3 SC70)                     |
| R201, R202, R214, R218 |     4 | 0Ω ±1% resistors (0805)                    |
| R203, R205             |     1 | 560Ω ±1% resistors (0805)                  |
| R204                   |     1 | 100kΩ ±1% resistor (0805)                  |
| R206                   |     1 | 45.3kΩ ±1% resistor (0805)                 |
| R207                   |     1 | 10kΩ ±1% resistor (0805)                   |
| R210, R217             |     2 | 4.7kΩ ±1% resistors (0805)                 |
| R211, R212             |     2 | 330Ω ±1% resistors (0805)                  |
| R213                   |     1 | 2.2kΩ ±1% resistor (0805)                  |

## Component Suppliers

| SUPPLIER               | PHONE        | WEBSITE       |
|------------------------|--------------|---------------|
| AVX North America      | 864-967-2150 | www.avx.com   |
| Omega Engineering, Inc | 888-826-6342 | www.omega.com |

Note:

Indicate that you are using the MAX31850/MAX31851 when contacting these component suppliers.

## Evaluates: MAX31850/MAX31851

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| TH1           |     1 | K-type thermocouple socket Omega PCC-SMP-K-5-ROHS                   |
| TH2           |     0 | Do not populate, thermocouple socket                                |
| TP1           |     1 | White test point                                                    |
| TP2, TP3      |     2 | Black test points                                                   |
| TP6           |     1 | Red test point                                                      |
| U1            |     1 | Thermocouple-to-digital converter (10 TDFN-EP*) Maxim MAX31850KATB+ |
| U3            |     0 | Do not populate, MAX31850/ MAX31851                                 |
| U2, U4        |     2 | TVS diode arrays (3 SOT) NUP2105LT1G                                |
| U20           |     1 | Microcontroller (28 SO) Microchip PIC18LF2550-I/SO                  |
| U21           |     1 | 50mA to 600mA current-limit switch (6 SOT23) Maxim MAX4995AAUT+     |
| U22           |     1 | 500mALDO regulator Maxim MAX8902BATA+                               |
| X1            |     1 | 48MHz, 3.3V oscillator (SMD) AVX KC3225A48.0000C30E00               |
| -             |     1 | Micro-USB cable                                                     |
| -             |     1 | K-type thermocouple Omega 5SRTC-GG-K-24-36-ROHS                     |
| -             |    12 | Jumpers/shunts                                                      |
| -             |     1 | PCB: MAX31850/51 EV Kit                                             |

## Quick Start

## Required Equipment

- MAX31850/MAX31851 EV kit hardware
- Windows XP or Windows 7 PC with a spare USB port
- USB Port
- Micro-USB cable (included)
- K-type thermocouple (included)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  under  lined refers to items from the Windows operating system.

## Procedure

Follow the steps below to get started measuring tem  perature  using  the  device  interfaced  to  a  K-type thermocouple.

- 1) Connect  the  included  K-type  thermocouple  to  TH1 (thermocouple socket) of the EV kit hardware. One terminal of the thermocouple is wider than the other, ensuring proper polarity.
- 2) Ensure  that  jumpers/shunts  are  installed  on  JP1  JP6. JP1 and JP2  should both be either positioned on the left for parasitic power mode or positioned on the right to be externally powered. JP3-JP6 jumpers can  be  in  either  position  depending  on  the  desired location address.
- 3) Set the EV kit hardware on a nonconductive surface to  ensure  that  nothing  on  the  PCB  gets  shorted togeth  er.
- 4) Prior  to  starting  the  GUI,  connect  the  EV  kit  hardware  to  a  PC  using  the  supplied  Micro-USB  cable, or equiva  lent. The power LED (D20) should be green and  the  com  LED  (D21)  should  be  red  and  slowly flash orange.
- 5) Windows  should  automatically  begin  installing  the necessary  device  driver.  The  USB  interface  of  the EV kit hardware is configured as an HID device and therefore  does  not  require  a  unique/custom  device driver.  Once  the  driver  installation  is  complete,  a Windows  message  appears  near  the System  Icon menu indicating  that  the  hardware  is  ready  to  use. Do not attempt to run the GUI prior to this message. If you do, you must close the application and restart it  once  the  driver  installation  is  complete.  On  some versions of Windows, Administrator privileges may be required to install the USB device.

## Evaluates: MAX31850/MAX31851

- 6) Once  the  device  driver  installation  is  complete, visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, titled MAX31850\_51EVKitSetup.ZIP. Save the EV kit software to a temporary folder.
- 7) Unzip the .ZIP file and double click the .EXE file to run the  installer. A  message  box  stating The publisher could not be verified. Are you sure you want to run this software? may appear. If so, click Yes .
- 8) Follow the instructions on the installer and once complete, click Finish . The default location of the GUI is in the program files directory.
- 9) When the GUI appears, the status bar should display EV  kit  hardware  Connected in  the  bottom  right hand corner. The com LED (D21) on the EV kit board should turn green.

## Detailed Description of Software

## Software Startup

If  the  MAX31850/MAX31851  EV  kit  is  connected  when the  software  is  opened,  the  software  first  initializes  the hardware  to  communicate. Then  the  software  searches for all ROM codes on the bus and lists them in the ROM Code drop-down lists.  If  a  ROM  code  is  found  with  the correct family code (3Bh), the software reads all data from the device.  If the software is started without the hardware connected, the initialization sequence above is executed once the EV kit is connected.

## Read Data Tab

When the Read Data tab sheet (Figure 1) is selected, a temperature conversion is performed and the scratchpad and  power-supply  mode  are  read  from  the  device.  The Read  Power  Mode button  executes  the  Match  ROM (55h)  and  Read  Power  Supply  (B4h)  command  and displays the data in the Power Supply Mode edit  field. The Read Temperature button executes the Match ROM (55h),  Convert  T  (44h),  and  Read  Scratchpad  (BEh) commands. This reads the Thermocouple Temp , Cold Junction Temp , Fault  Status ,  and Location Address , and  then  the Linearized  Temp is  calculated.  If  the Power  Supply  Mode is  parasite,  then  a  strong  pullup is  enabled  while  the  device  converts  temperature.  If  a fault  is  detected,  then  the  color  indicator  turns  red  and the status bar displays FAULT! .  Both buttons match the ROM code selected in the ROM Code drop-down list. The Thermocouple Type drop-down list is used to calculate the  linearized  temperature  and  should  be  changed  to match the hardware thermocouple type. Table 1 lists all possible settings. The temperature can also be polled by pressing the Start Polling button in the upper right-hand corner. This executes the same commands as the Read Temperature button.  The  polling  rate  can  be  selected using the Polling menu bar option. To stop polling, press the Stop Polling button.

Figure 1. MAX31850/MAX31851 EV Kit GUI (Read Data Tab)

<!-- image -->

## Table 1. Sensitivity of Thermocouples

| TYPE   |   SENSITIVITY ( μ V/ºC) |
|--------|-------------------------|
| K*     |                  41.276 |
| J      |                  57.953 |
| N      |                  36.256 |
| R      |                  10.506 |
| S      |                   9.587 |
| T      |                   52.18 |
| E      |                  76.373 |

*Default setting.

## MAX31850/MAX31851 Evaluation Kit

## Temperature Graph Tab

The Temperature  Graph tab  sheet  (Figure  2)  displays a line graph of the polled temperatures. Data points are plotted when the Start Polling button is pressed. To show/ hide a series in the graph, check/uncheck the checkboxes

## Evaluates: MAX31850/MAX31851

on the bottom. The graph can save up to 500,000 data points per series. To save the data to a CSV file, press the Save Data button. The graph can be cleared by pressing the Clear Graph button.

Figure 2. MAX31850/MAX31851 EV Kit GUI (Temperature Graph Tab)

<!-- image -->

## MAX31850/MAX31851 Evaluation Kit

## 1-Wire Commands Tab

The 1-Wire  Commands tab  sheet  (Figure  3)  contains buttons  for  all  the  1-Wire  commands  and  displays  the data in HEX format. All the ROM command buttons first issue a reset and detect a presence before sending their command. The device can also be reset using the Reset Device option  in  the Device menu.  The Search  ROM (F0h) button searches for all the ROM codes on the bus and places them in the ROM Codes Found drop-down list. This same search can be performed using the Search for  ROMs option  in  the Device menu.  When  a  ROM code is selected from the drop-down list, the ROM Code table  is  automatically  populated  with  this  selection.  The Match ROM (55h) button matches the ROM selected in the  drop-down  list.  The Read ROM (33h) button  reads

## Evaluates: MAX31850/MAX31851

the ROM on the 1-Wire bus and displays it in the ROM Code table. The Skip ROM (CCh) sends the skip ROM command. The Read ROM (33h) and Skip ROM (CCh) buttons should be used if only one device is on the bus. The MAX31850/51 Commands should only be pressed after  a  ROM  command  is  complete.  To  perform  a  temperature conversion, press the Convert T (44h) button. If the device is configured in parasite power mode (00h), then  the Enable  Strong  Pull  Up checkbox  should  be checked before the Convert T (44h) button  is  pressed. The Read Scratchpad (BEh) button  reads  the  scratchpad  and  displays  the  9  bytes  in  the Scratchpad table. The Read Power Supply (B4h) button reads the powersupply mode and displays the byte in the Power Supply Mode edit field.

Figure 3. MAX31850/MAX31851 EV Kit GUI (1-Wire Commands Tab)

<!-- image -->

## MAX31850/MAX31851 Evaluation Kit

## Detailed Description of Hardware

The  MAX31850/MAX31851  EV  kit  hardware  provides everything needed to evaluate a K-type thermocouple. In addition to a thermocouple and MAX31850, the hardware includes  a  USB  interface  that  is  used  to  communicate with the PC-based software. An added feature is that the hard  ware is USB powered, meaning that no power supplies are needed.

## Thermocouple Channels

The EV kit hardware features two thermocouple channels.  The  top  channel  comes  preconfigured  with a  MAX31850KATB+,  K-type  thermocouple,  and  thermocouple  socket.  A  sec  ond  channel  is  provided  to make it easy to evaluate other thermocouple types. The bottom channel is almost fully populated, missing only the desired MAX31850 or MAX31851 version, correspond  ing thermocouple,  and  thermocouple  socket.  The  following section describes how to modify the hardware in order to evaluate other thermocouple types.

## Evaluating Other Thermocouple Types

## Evaluates: MAX31850/MAX31851

Once the three items have been procured, power down the EV kit by disconnecting the Micro-USB cable. Carefully solder the Maxim device to the footprint labeled U3 and the  thermocouple  socket  to  the  footprint  labeled  TH2. Finally, connect the thermocouple to the socket.

Reconnect the USB cable to the EV kit and then run the software.  In  the Device menu  on  the  GUI,  select  the Search for ROMs option. Two devices should be found and shown in the ROM Codes drop-down list. Select the correct Thermocouple Type in the table and the device is ready to be evaluated.

## User-Supplied 1-Wire interface

To  communicate  with  the  devices  with  a  user-supplied 1-Wire  interface,  first  disconnect  the  USB  and  remove resistor R218  to  disconnect the on-board  interface. Connect the off-board  1-Wire  interface  to  the  GND,  DQ, and 3.3V test points  for  the  externally  powered  mode.  If parasite-power mode is configured on JP1 and JP2, only the GND and DQ test points need to be connected to the user-supplied interface.

To use the bottom channel, see Table 2 for the part numbers of the three items required for the desired thermocouple type.

## Power Configuration

To power the device externally with 3.3V, move both jumpers on JP1 and JP2 to the 3.3V position on the right. For parasite power, move JP1 and JP2 to the GND and DQ position on the left. See Table 3 for the jumper descriptions.

## Table 2. Items for Other Thermocouple Types

| TYPE   | PART           | THERMOCOUPLE*             | SOCKET*     |
|--------|----------------|---------------------------|-------------|
| K      | MAX31850 KATB+ | 5SRTC-GG-K-24-36          | PCC-SMP-K-5 |
| J      | MAX31850JATB+  | 5SRTC-GG-J-24-36          | PCC-SMP-J-5 |
| N      | MAX31850NATB+  | NMQIN-010E-6 (unverified) | PCC-SMP-N-5 |
| T      | MAX31850TATB+  | 5SRTC-GG-T-24-36          | PCC-SMP-T-5 |
| E      | MAX31850EATB+  | 5SRTC-GG-E-24-36          | PCC-SMP-E-5 |
| S      | MAX31851 SATB+ | -                         | -           |
| R      | MAX31851RATB+  | -                         | -           |

## MAX31850/MAX31851 Evaluation Kit

Table 3. Description of Jumpers (JP1 -JP6)

| JUMPER   | JUMPER POSITION   | DESCRIPTION                                                         |
|----------|-------------------|---------------------------------------------------------------------|
| JP1      | 3.3V              | Connects the VDD pin of the device to 3.3V for external power mode  |
| JP1      | GND               | Connects the VDD pin of the device to GND for parasite power mode   |
| JP2      | 3.3V              | Connects theAD pin's high reference to 3.3V for external power mode |
| JP2      | DQ                | Connects theAD pin's high reference to DQ for parasite power mode   |
| JP3      | High              | Connects AD3 to a high reference                                    |
| JP3      | Low               | Connects AD3 to GND                                                 |
| JP4      | High              | Connects AD2 to a high reference                                    |
| JP4      | Low               | Connects AD2 to GND                                                 |
| JP5      | High              | Connects AD1 to a high reference                                    |
| JP5      | Low               | Connects AD1 to GND                                                 |
| JP6      | High              | Connects AD0 to a high reference                                    |
| JP6      | Low               | Connects AD0 to GND                                                 |

## Troubleshooting

The EV kit should work on the first try directly out of the box. In the rare occasion that a problem is suspected, see Table 4 to help troubleshoot the issue.

## Table 4. Troubleshooting

| SYMPTOM                                                 | CHECK                                                      | SOLUTION                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says hardware not found                             | Is the power LED (D20) red?                                | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface.                                                                                                           |
| GUI says hardware not found                             | Does the com LED (D21) turn green when the GUI is running? | If not, then exit the GUI and try running it again. If the com LED still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC. Wait for a Windows message that states the hardware is ready to use. Run the GUI again. |
| GUI says hardware not found                             | Are any of the LEDs illuminated?                           | If not, then the PCB may not be getting power from the USB. Try a dif- ferent USB cable or a different USB port.                                                                                                                                                            |
| The data temperature and power-supply data is incorrect | JP1 (VDD pin)                                              | The VDD pin cannot be left unconnected. Populate a jumper to the right (3.3V) position for external power or to the left (GND) position for parasite power.                                                                                                                 |
| GUI says 'No ROM Codes found'                           | R218                                                       | Make sure R218 is populated. This connects the DQ pin to the USB to 1-Wire interface.                                                                                                                                                                                       |

## MAX31850/MAX31851 Evaluation Kit

## Evaluates: MAX31850/MAX31851

Figure 4a. MAX31850/MAX31851 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX31850/MAX31851 Evaluation Kit

## Evaluates: MAX31850/MAX31851

Figure 4b. MAX31850/MAX31851 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX31850/MAX31851 Evaluation Kit

Figure 5. MAX31850/MAX31851 EV Kit PCB Layout -Top Layer

<!-- image -->

Figure 6. MAX31850/MAX31851 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31850EVKIT# | EV Kit |

# Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

## MAX31850/MAX31851 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/13            | Initial release | -               |

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOied. Ma[iP InteJrated reserves tKe riJKt to FKanJe tKe FirFuitr\ and sSeFifiFations ZitKout notiFe at an\ tiPe. 7Ke SaraPetriF vaOues (Pin an sKoZn in tKe EOeFtriFaO &amp;KaraFteristiFs tabOe are Juaranteed. Other parametric values quoted in this data sheet are provided for guidance.