<!-- lastmod 2022-08-03 -->
## MAX3407 Evaluation Kit

## General Description

The  MAX34407  evaluation  kit  (EV  kit)  provides  the hardware  and  software  graphical  user  interface  (GUI) necessary to evaluate the MAX34407 SMBus 4-Channel Wide  Dynamic  Range  Power  Accumulator.  The  EV  kit includes  a  MAX34407EWE+  installed,  as  well  as  a micro-USB cable to communicate with a PC.

## EV Kit Contents

- Assembled circuit board including MAX34407EWE+
- Micro-USB cable

## EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Windows XP is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Easy Evaluation of the MAX34407
- USB HID interface
- Windows XP ®  and Windows ®  7-Compatible Software
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX3407

<!-- image -->

## MA34407 EV Kit Files

| FILE                           | DECRIPTION          |
|--------------------------------|---------------------|
| MAX34407EVKSoftwareInstall.EXE | Application program |

Note: The .EXE file is downloaded as a .ZIP file.

## Quick Start

## Required Equipment

- MAX34407 EV kit
- Windows XP or Windows 7 PC
- USB port
- Micro-USB cable (included)
- EV kit hardware (included)
- Screwdriver
- Load (to measure power)

Note: In  the  following  sections,  software-related  items are identified in bold . Text in bold refers to items directly from the install or EV kit software. T ext in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that all four jumpers on J3/J22 are populated.
- 2) Place the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 3) Prior to starting the GUI, connect the EV kit hardware to a PC using the supplied micro-USB cable or equivalent. The POWER LED (D20) should be green and the COM LED (D21) should be red and slowly flash orange.
- 4) Windows should automatically begin installing the necessary device driver. The USB interface of the EV kit hardware is configured as an HID device and therefore does not require a unique/custom device driver. Once the driver installation is complete, a Windows message appears near the System Icon menu, indicating that the hardware is ready to use. Do not attempt to run the GUI prior to this message. If you do, then you must close the application and restart it once the driver installation is complete. On some versions of Windows, administrator privileges may be required to install the USB device driver.
- 5) Once the device driver installation is complete, visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX34407EVKitSetupV0.4.zip . Save the EV kit software to a temporary folder.
- 6) Open the .ZIP file and double-click on the .EXE file to run the installer. A message box stating The publisher could not be verified. Are you sure you want to run this software? may appear. If so, click Yes .
- 7) The installer GUI appears. Click Next and then Install . Once complete click Close .
- 8) Go to Start | All Programs . Look for the MAX34407EVKitSoftware folder and click on MAX34407EVKitSoftware.EXE inside the folder.
- 9) When the GUI appears, the text at the bottom-right corner of the window should display EV Kit Hardware Connected . The COM LED (D21) changes to green.
- 10)  Connect a load to at least one of the power monitors (IN1-IN4) and then click Single Read .

Evaluates: MAX34407

## Detailed Description of Software

## Software Startup

If the MAX34407 EV kit is connected when the software is  opened,  the  software  first  initializes  the  hardware  to communicate.  Next,  the  software  searches  for  all  slave addresses on the I 2 C bus and connects to the first valid slave address. Then, the GUI displays EV Kit Hardware Connected at the bottom-right corner of the window under the Maxim logo. If the EV kit is not connected on software startup,  the  GUI  populates  with  default  EV  kit  values and  displays EV  Kit  not  detected! Once  the  EV  kit  is connected, the GUI searches for slave addresses.

## Menu Items

The Device menu item allows the user to connect to a desired device. Find Slave Addresses searches for all slave  addresses  connected  to  the  I 2 C  bus.  To  select  a device,  click Select  Slave  Address and  all  the  slave addresses found are shown and are selectable.

## Status Log

The status log below the tabs displays all the actions the GUI performs. Whenever a SMBus command is read or written, the action is confirmed by the log. The log can be cleared by clicking on the Clear Log button.

│

## MAX34407 Evaluation Kit

## Monitor/Graph Tab

The Monitor/Graph tab sheet (Figure 1) displays all the accumulator values. In the Monitor group box table, the Polled values  are  the  Accumulator  values  read  from PWR\_ACC\_1  to  PWR\_ACC\_4  (03h  to  06h)  that  are converted  to  amps  using  the RSENSE value  in  the Control table shown in Figure 2. The Sampled Voltage and Average  Power columns  track  the  voltage  and average power of the Polled value for each channel. All values on the tab are read when the tab is selected or when the Read button is clicked. The OC status bits are cleared after every read. Check the Auto Poll checkbox to continuously read every 0.3s.

The Data Log Controls group  box  contains  the  graphrelated  controls. Graph  Points displays  the  number of  reads  that  have  been  tracked  in  the  data  log.  The

Sampled  Voltage and Average  Power values  are  still based  on  all  the  poll  count  values,  to  reset  the Poll Count , Sampled Voltage ,  and Average Power values, click on the Data Log Reset button. To save all the data graphed  to  a  CSV  file,  click  on  the Save  Data button. The Average Power/Voltage button selects the Average Power or voltage to be graphed.

## Control/Registers Tab

The Control/Registers tab  sheet (Figure 2) displays all the  SMBus  commands  and  their  current  values.  In  the Control group  box  table,  the RSENSE (mΩ) column  is the  value  of  the  resistor  (R3X-R4X)  between  IN+  and IN-  signals.  The Max  Current  (A) column  displays  the maximum current threshold converted to amps using the RSENSE value.

Figure 1. MAX34407 EV Kit GUI (Monitor/Graph Tab)

<!-- image -->

│

Figure 2. MAX34407 Control/Registers Tab

<!-- image -->

## Detailed Description

The  MAX34407  automatically  sequences  through  the channels to collect samples from the common-mode voltage and the current-sense amplifiers. The 16-bit current value and  the  12-bit  voltage  value  are  then  multiplied  to create  a  28-bit  power  value  that  is  then  written  to  the power accumulator.

## Troubleshooting

All efforts were made to ensure that each EV kit works on the first try, right out-of-the-box. In the rare occasion that a problem is suspected, see Table 3 to help troubleshoot the issue.

## Table 1. Description of Switches (SLOW &amp; PDN)

| SWITCH           | POSITION   | DESCRIPTION                              |
|------------------|------------|------------------------------------------|
| SLOW             | VIO        | Slow Mode for Reduced Power Consumption. |
| SLOW             | GND        | Fast Mode.                               |
| PDN (Power Down) | VIO        | GUI reading device.                      |
| PDN (Power Down) | GND        | GUI stops reading device.                |

## Table 2. Description of LEDs (D20, D21)

| LED         | COLOR   | DESCRIPTION                                                                                                                 |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| D20 (POWER) | Red     | USB Power Fault: Afault occurred due to overvoltage limit, current limit, or thermal limit.                                 |
| D20 (POWER) | Green   | USB Power: USB power supply is on.                                                                                          |
| D21 (COM)   | Red     | Communication: After the software has initialized the hardware, the LED flashes red when a command from the PC is received. |
| D21 (COM)   | Green   | Initialized: Hardware has been initialized by software.                                                                     |

│

Evaluates: MAX34407

## Table 3. Troubleshooting

| SYMPTOM                                                            | CHECK                                                        | SOLUTION                                                                                                                                                                                                                                                                   |
|--------------------------------------------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI indicates: Hardware not found                                  | Is the LED labeled D20 red?                                  | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface.                                                                                                          |
| GUI indicates: Hardware not found                                  | Does the LED labeled D21 turn green when the GUI is running? | If not, then exit the GUI and try running it again. If D21 still does not turn green, then exit the GUI and try connecting the USB cable to a different USB port on the PC and wait for a Windows message indicating that the hardware is ready to use. Run the GUI again. |
| GUI indicates: Hardware not found                                  | Are any of the LEDs illuminated?                             | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port.                                                                                                                                                             |
| GUI indicates Read Failed! and all slave addresses are being found | J23/22                                                       | Make sure all four jumpers on J3/J22 are populated.                                                                                                                                                                                                                        |

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX34407 EV BOM
- MAX34407 EV PCB
- MAX34407 EV Schematics

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34407EVKIT# | EV Kit |

#Denotes an RoHS-compliant device that may include lead(Pb), which is exempt under the RoHS requirements.

Evaluates: MAX34407

## MAX34407 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------|-----------------|
|                 0 | 6/16            | Initial release                                      | -               |
|                 1 | 9/16            | Removed Monitor Current of Load section and Figure 3 | 5               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP Integrated reserves the right to change the circuitr\ and specifications without notice at an\ tiPe.

│

Evaluates: MAX34407

EVKit Part Number: MAX34407EVKIT# Revision: C Date Last Edited: 01-12-16 Last Edited by:  Amir Mirbagheri COB1

|   Item | Ref Designator                                                               |   Qty | Value         | Descriptio n                                        | LibRef      | Manufacturer                    | Manufacturer_Part_Number   | Blank Internal Part Number   | Programmed Internal Part Number   |
|--------|------------------------------------------------------------------------------|-------|---------------|-----------------------------------------------------|-------------|---------------------------------|----------------------------|------------------------------|-----------------------------------|
|      1 | B1                                                                           |     1 | GND           | BANANA_JACK                                         | BANANA JACK | Deltron                         | 571-0100                   |                              |                                   |
|      2 | C1, C3, C212                                                                 |     3 | 0.1 μ F       | 0805 Capacitor                                      | CAP         | TDK Corporatio n                | CGA4J2X7R2A104K            |                              |                                   |
|      3 | C1A, C1B, C1C, C1D, C2, C2A, C2B, C2C, C2D, C4, C5, C6, C215                 |    13 | DNP           | 0805 Capacitor                                      | CAP         |                                 |                            |                              |                                   |
|      4 | C201, C202, C204                                                             |     3 | 10 μ F        | 0805 Capacitor                                      | CAP         | Taiyo Yuden                     | EMK212ABJ106KD-T           |                              |                                   |
|      5 | C203, C214                                                                   |     2 | 0.01 μ F      | 0805 Capacitor                                      | CAP         | Murata                          | GRM21BR72A103K             |                              |                                   |
|      6 | C211                                                                         |     1 | 1 μ F         | 0805 Capacitor                                      | CAP         | TDK Corporatio n                | C2012X7R1H105K/SOFT        |                              |                                   |
|      7 | C213                                                                         |     1 | 220nF         | 0805 Capacitor                                      | CAP         | TDK Corporatio n                | C2012X7R1H224K             |                              |                                   |
|      8 | D20                                                                          |     1 | LED_DUAL      | LED_BI-COLOR                                        | LED_DUAL    | Knightbright                    | APHBM2012SURKCGKC          |                              |                                   |
|      9 | D21                                                                          |     1 | COM           | LED_BI-COLOR                                        | LED_DUAL    | Knightbright                    | APHBM2012SURKCGKC          |                              |                                   |
|     10 | D22                                                                          |     1 | SCHOTTKEY     | MINI2-F1                                            | SCHOTTKEY   | Panasonic - SSG                 | DB2W31900L                 |                              |                                   |
|     11 | J1A, J1B, J1C, J1D                                                           |     4 | CON2          | 32A_2T_PCB 2- position screw terminals 6.35mm pitch | CON2        | Phoenix Contact                 | 1714955                    |                              |                                   |
|     12 | J3                                                                           |     1 | Dongle Header | HDR_4pin                                            | CON4        | 3M Headers & Wire Housing       | 961104-6804-AR             |                              |                                   |
|     13 | J20                                                                          |     1 | USB_5PIN      | USB_MICRO-B                                         | USB_5PIN    | Molex                           | 105017-0001                |                              |                                   |
|     14 | J21                                                                          |     1 | DNP           | HDR_2PIN                                            | CON2        |                                 |                            |                              |                                   |
|     15 | J22                                                                          |     1 | I2C DONGLE    | HDR_4pin                                            | CON4        | 3M Headers & Wire Housing       | 961104-6804-AR             |                              |                                   |
|     16 | R1, R1A, R1B, R1C, R1D, R2, R2A, R2B, R2C, R2D, R5, R6, R7, R201, R202, R214 |    16 | 0 Ω           | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW08050000Z0EA           |                              |                                   |
|     17 | R3, R4, R213                                                                 |     3 | 2.2k Ω        | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW08052K20FKEA           |                              |                                   |
|     18 | R3A, R3B, R3C, R3D                                                           |     4 | 10m Ω         | 2512 Resistor                                       | RES1        | Panasonic Electronic Components | ERJ-M1WSF10MU              |                              |                                   |
|     19 | R4A, R4B, R4C, R4D                                                           |     4 | DNP           | 2512 Resistor                                       | RES1        |                                 |                            |                              |                                   |
|     20 | R203, R205                                                                   |     2 | 560 Ω         | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW0805560RFKEA           |                              |                                   |
|     21 | R204                                                                         |     1 | 100k Ω        | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW0805100KFKEA           |                              |                                   |
|     22 | R206                                                                         |     1 | 45.3k Ω       | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW080545K3FKEA           |                              |                                   |
|     23 | R207                                                                         |     1 | 10k Ω         | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW080510K0FKEA           |                              |                                   |
|     24 | R210                                                                         |     1 | 4.7k Ω        | 0805 Resistor                                       | RES1        | Vishay/Dale                     | CRCW08054K70FKEA           |                              |                                   |
|     25 | R211, R212                                                                   |     2 | 330 Ω         | 0805 Resistor                                       | RES1        | KOA Speer                       | RK73H2ATTD3300F            |                              |                                   |
|     26 | R215, R216                                                                   |     2 | DNP           | 0805 Resistor                                       | RES1        |                                 |                            |                              |                                   |

|   27 | S1, S2    |   2 | SW - SPDT   | SPDT_Slider        | SW - SPDT   | TE Connectivity / Alcoswitch   |   SLS121PC04 |
|------|-----------|-----|-------------|--------------------|-------------|--------------------------------|--------------|
|   28 | TP1A      |   1 | IN1+        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   29 | TP1B      |   1 | IN2+        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   30 | TP1C      |   1 | IN3+        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   31 | TP1D      |   1 | IN4+        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   32 | TP2A      |   1 | IN1 -       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   33 | TP2B      |   1 | IN2 -       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   34 | TP2C      |   1 | IN3 -       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   35 | TP2D      |   1 | IN4 -       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   36 | TP3A      |   1 | IN1_P       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   37 | TP3B      |   1 | IN2_P       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   38 | TP3C      |   1 | IN3_P       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   39 | TP3D      |   1 | IN4_P       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   40 | TP4A      |   1 | IN1_N       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   41 | TP4B      |   1 | IN2_N       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   42 | TP4C      |   1 | IN3_N       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   43 | TP4D      |   1 | IN4_N       | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   44 | TP7       |   1 | 5V          | TEST POINT - Red   | TEST_POINT  | Keystone                       |         5010 |
|   45 | TP8, TP16 |   2 | 3.3V        | TEST POINT - Red   | TEST_POINT  | Keystone                       |         5010 |
|   46 | TP10      |   1 | SDA         | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   47 | TP11      |   1 | SCL         | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   48 | TP12      |   1 | VIO         | TEST POINT - Red   | TEST_POINT  | Keystone                       |         5010 |
|   49 | TP13      |   1 | ADDR        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |
|   50 | TP14      |   1 | SLOW        | TEST POINT - White | TEST_POINT  | Keystone                       |         5012 |

<!-- image -->

|   51 | TP15                                               |   1 | PDN                   | TEST POINT - White                                 | TEST_POINT     | Keystone         | 5012                 |        |             |
|------|----------------------------------------------------|-----|-----------------------|----------------------------------------------------|----------------|------------------|----------------------|--------|-------------|
|   52 | TP17, TP18, TP19                                   |   3 | GND                   | TEST POINT - Black                                 | TEST_POINT     | Keystone         | 5011                 |        |             |
|   53 | U1A                                                |   1 | MAX34407              | WLP16C50P4X4_219 X228X64                           | MAX34407       | Maxim Integrated | MAX34407EWE+         |        |             |
|   54 | U1B (DNP)                                          |   1 | DNP                   | SM19 - TSSOP - 16_173                              | SM19 - TSSOP   |                  |                      |        |             |
|   55 | U20 Should be programmed                           |   1 | PIC18LF2550           | SOIC127P1030X265 - 28N IC+,PRGM,89 - 3900H#K02,U20 | PICfor DS3900  | Microchip        | PIC18LF2550 - I/SO   | EQ1270 | EICP3900HU1 |
|   56 | U21                                                |   1 | MAX4995A              | SOT23 - 6                                          | MAX4995A       | Maxim Integrated | MAX4995AAUT+         |        |             |
|   57 | U22                                                |   1 | MAX8902B              | QFN127P600 - 8NEP                                  | MAX8902B       | Maxim Integrated | MAX8902BATA+         |        |             |
|   58 | X1                                                 |   1 | KC3225A48.000 0C30E00 | CRYSTAL_SM_3.2X2.5 mm_A                            | OSC_CMOS_4 pin | AVX              | KC3225A48.0000C30E00 |        |             |
|   59 | Micro USB Cable shoud be included in the EVKit Box |   1 |                       | A Male to Micro USB B Male Cable                   |                | Tripp Lite       | UR050 - 006          |        |             |

PAB101

PAB101

PAJ1A01

PAJ1A01

PAJ1A02

PAJ1A02

PAJ1B01

PAJ1B01

PAJ1B02

PAJ1B02

PAJ1C01

PAJ1C01

PAJ1C02

PAJ1C02

PAJ1D01

PAJ1D01

PAJ1D02

PAJ1D02

COJ1A

COJ1B

COJ1C

COJ1D

COTP3A

PATP3A01

PATP3A01

COTP4A

PATP4A01

PATP4A01

COTP3B

PATP3B01

PATP3B01

COTP4B

PATP4B01

PATP4B01

COTP3C

PATP3C01

PATP3C01

COTP4C

PATP4C01

PATP4C01

COTP3D

PATP3D01

PATP3D01

COTP4D

PATP4D01

PATP4D01

COR4A

PAR4A02

PAR4A02

PAR4A01

PAR4A01

COR4B

PAR4B02

PAR4B02

PAR4B01

PAR4B01

COR4C

PAR4C02

PAR4C02

PAR4C01

PAR4C01

COR4D

PAR4D02

PAR4D02

PAR4D01

PAR4D01

COR3A

PAR3A02

PAR3A02

PAR3A01

PAR3A01

COR3B

PAR3B02

PAR3B02

PAR3B01

PAR3B01

COR3C

PAR3C02

PAR3C02

PAR3C01

PAR3C01

COR3D

PAR3D02

PAR3D02

PAR3D01

PAR3D01

CORef1

COC1A

COR1A

COR2A

COC2A

COC1B

COR1B

COR2B

COC2B

COC1C

COR1C

COR2C

COC2C

COC1D

COR1D

COR2D

COC2D

PAC1A02

PAC1A02

PAR1A02

PAR1A02

PAR2A02

PAR2A02

PAC2A01

PAC2A01

PAC1B02

PAC1B02

PAR1B02

PAR1B02

PAR2B02

PAR2B02

PAC2B01

PAC2B01

PAC1C02

PAC1C02

PAR1C02

PAR1C02

PAR2C02

PAR2C02

PAC2C01

PAC2C01

PAC1D02

PAC1D02

PAR1D02

PAR1D02

PAR2D02

PAR2D02

PAC2D01

PAC2D01

PAC1A01

PAC1A01

PAR1A01

PAR1A01

PAR2A01

PAR2A01

PAC2A02

PAC2A02

PAC1B01

PAC1B01

PAR1B01

PAR1B01

PAR2B01

PAR2B01

PAC2B02

PAC2B02

PAC1C01

PAC1C01

PAR1C01

PAR1C01

PAR2C01

PAR2C01

PAC2C02

PAC2C02

PAC1D01

PAC1D01

PAR1D01

PAR1D01

PAR2D01

PAR2D01

PAC2D02

PAC2D02

COTP1A

PATP1A01

PATP1A01

COTP2A

PATP2A01

PATP2A01

COTP1B

PATP1B01

PATP1B01

COTP2B

PATP2B01

PATP2B01

COTP1C

PATP1C01

PATP1C01

COTP2C

PATP2C01

PATP2C01

COTP1D

PATP1D01

PATP1D01

COTP2D

PATP2D01

PATP2D01

PAU1B016

PAU1B016

PAU1B015

PAU1B015

PAU1B014

PAU1B014

PAU1B013

PAU1B013

PAU1B012

PAU1B012

PAU1B011

PAU1B011

PAU1B010

PAU1B010

PAU1B09

PAU1B09

COC6

COR7

COC2

PAC202

PAC202

COC1

PAC102

PAC102

COU1B

COU1A

PAU1A0

PAU1A0

4

PAU1

0A3

PAU1A0

2

1

PAU1

0A3

PAU1A0

2

PAU1A0

1

PAU1A0

4

PAU1A0B1PAU1A0B2

PAU1A0B1

PAU1A0B2

PAU1A0C1

PAU1A0C1PAU1A0C2

PAU1A0C2

PAU1A0D1PAU1A0D2

PAU1A0D1

PAU1A0D2

PAC601

PAC601

PAU1A0B4

PAU1A0B4

PAU1A0C4

0B3

0B3

0C3

PAU1A0C4

0C3

0D3

PAU1A0D4

0D3

PAU1A0D4

PAC602

PAC602

PAR702

COTP13

PAR702

PAR701

PAR701

PATP1301

PATP1301

COTP17

PATP1701

PATP1701

PAU1

PAU1

PAU1

PAU1

PAU1

PAU1

PAC201

PAC201

PAC101

PAC101

PAU1B01

PAU1B01

PAU1B02

PAU1B02

PAU1B03

PAU1B03

PAU1B04

PAU1B04

PAU1B05

PAU1B05

PAU1B06

PAU1B06

PAU1B07

PAU1B07

PAU1B08

PAU1B08

PAR102

PAR102

PAC301

PAC301

PAR202

PAR202

PAR402

PAR402

PAR302

PAR302

COTP11

PATP1101

PATP1101

PAR101

PAR101

PAC302

PAC302

PAR201

PAR201

PAR401

PAR401

PAR301

PAR301

COR1

COC3

COR2

COR4

COR3

COTP15

PATP1501

PATP1501

COTP12

PATP1201

PATP1201

COTP18

PATP1801

PATP1801

COTP14

COC5

PAC501

PAC501

COR6

PAR602

PAR602

PAS203

PAS203

COC4

PAC401

PAC401

COR5

PATP1401

PATP1401

COTP10

PATP1001

PATP1001

COTP16

PATP1601

PATP1601

PAR502

PAR502

PAS103

PAS103

PAC502

PAC502

PAR601

PAR601

PAS202

PAS202

PAC402

PAC402

PAR501

PAR501

PAS102

PAS102

PAS201

PAS201

PAS101

PAS101

COS2

COS1

COJ3

COR213

PAD2202

PAR21302

PAR21302

PAD2202

PAR21301

PAD2201

PAD2201

PAR21301

COD22

COJ22

PAJ304

PAJ2204

PAJ304

PAJ2204

PAJ303

PAJ2203

PAJ303

PAJ2203

PAJ302

PAJ2202

PAJ302

PAJ2202

PAJ301

PAJ2201

PAJ301

PAJ2201

COR216

PAR21601

PAR21602

PAR21602

PAR21601

COR215

PAR21501

PAR21501

PAR21502

PAR21502

CO0

PAJ2102

PAJ2102

COU20

PAC21501

PAU20

27

PAU20

28

PAC21501

PAR21001

PAR21001

PAU2001

PAR20301

PAR20301

PAR20302

PAR20302

COC202

PAC20201

PAC20201

COR203

PAC20202

PAC20202

PAJ20

1

PAJ20

2

PAJ20

3PAJ20

PAJ200MH

PAJ20

2

PAJ20

3

PAJ20

1

COD20

PAR20101

PAD2004

PAD2004

PAD2003

PAR20201

PAD2003

PAR20101

PAR20201

PAD2001

PAR20102

PAR20102

PAR20202

PAR20202

PAD2002

PAD2001

PAD2002

COU21

COR201

PAU2101

PAU2101

PAU2106

COR202

PAU2106

PAU2102

PAU2105

PAU2102

PAU2105

PAU2103

COR204

PAU2104

PAU2103

PAU2104

PAR20402

PAR20401

PAR20401

PAR20402

COU22

PAU2201

PAU2201

PAU2208

PAU2208

PAU2202

PAU2202

PAU2203

PAU2209

PAU2203

PAU2207

PAU2207

PAU2206

PAU2209

PAU2206

PAU2204

PAU2205

PAU2204

COC212

PAC21201

PAC21201

COC211

COJ21

PAJ2101

PAJ2101

PAC21502

PAU20

24

PAU20 25

PAU20

26

PAU20

23

PAU20

2

COC215

PAC21502

PAU20

2

PAR21002 COR210

PAR21002

PAU2002

PAU2004

PAU2003

PAU2005

PAU2006

PAU2003

PAU2002

PAU2001

COD21

PAD2103

PAD2102

PAD2102

PAD2103

PAD2104

PAD2104

PAR21201

PAR21201

PAR21202

PAR21202

COR212

PAD2101

PAD2101

PAR21101

PAR21101

PAR21102

PAC21402

PAC21402

PAC21401

PAC21401

COC214

PAR21102

COR211

COTP7

PATP701

PATP701

COTP8

PATP801

PATP801

COTP19

PATP1901

PATP1901

PAC21202

PAC21202

PAC21101

PAC21101

PAU20

21

PAU20

20

PAU20

20

PAU20

21

PAU2008

PAC21102

PAC21102

PAU20

19

PAU20

PAU20

19

PAU2009

PAU20

10

PAU2008

PAU2009

PAR21402

PAR21401

PAR21402

PAR21401

COR214

PAX103

PAX102

PAX103

PAX102

PAX104

PAX104

COX1

PAX101

PAU20

PAU2007

4PAJ20

PAJ20

5

PAR20502

PAR20502

PAR20501

PAR20501

COR205

COC201

PAC20101

PAC20101

PAC20102

PAC20102

PAR20602

PAR20602

PAR20601

PAR20601

PAR20702

PAC20302

PAC20302

PAC20301

PAC20301

COC203

PAR20702

PAR20701

PAR20701

COR207

PAU20

PAU20

15

16

PAU20

16

PAU20

15

PAU20

13

PAU20

14

PAU20

14

PAU20

13

PAC21302

PAC21301

PAC21301

PAC21302

COC213

18

PAU20

1

PAU20

5

17

12

COJ20

COR206

PAC20401

PAC20401

PAC20402

PAC20402

COC204

<!-- image -->

<!-- image -->

USB  to  I2C  Programming  Board

<!-- image -->