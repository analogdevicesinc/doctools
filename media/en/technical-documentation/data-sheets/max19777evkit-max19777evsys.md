<!-- lastmod 2022-08-05 -->
## MAX19777 Evaluation System

## General Description

The  MAX19777  evaluation  system  (EVSYS)  is  a  fully assembled and tested PCB that evaluates the MAX19777 2-channel, 12-bit, SPI™-compatible 3Msps  analogto-digital  converter  (ADC).  The  MAX19777  EVSYS consist  of  the  MAXPRECADCMB1  and  the  MAX19777 evaluation kit (EV kit). The system also includes Window 7, Windows 8, and Windows 10 software that provides a simple  graphical  user  interface  (GUI)  for  exercising  the features of the device. The EV kit comes installed with a MAX19777AZA+ in a package.

Ordering Information appears at end of data sheet.

## EV System Component List

| PART            |   QTY | DESCRIPTION                   |
|-----------------|-------|-------------------------------|
| MAX119777EVKIT# |     1 | Daughter board                |
| MAXPRECADCMB1#  |     1 | Serial interface master board |

## MAX19777 EV Kit Photo

<!-- image -->

SPI is a trademark of Motorola, Inc.

Windows 7, Windows 8, and Windows 10 are registered trademarks of Microsoft Corp.

Evaluates: MAX19777

## Features

- 48MHz SPI Interface
- Window 7, Windows 8 and Windows 10-Compatible Software
- Time Domain, Frequency Domain, and Histogram Plotting in the EV Kit Software
- Frequency, RMS, Min, Max, and Average DC Calculations in the EV Kit Software
- On-Board Input Buffers
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

## MAX19777 EV Kit Files

| FILE                         | DESCRIPTION                                   |
|------------------------------|-----------------------------------------------|
| MAX19777EVKit SetupVx.x.exe  | Installs the EV system files on your computer |
| MAX19777.EXE                 | Application program                           |
| SLSUSB.DLL                   | Software library file                         |
| SLSUSB.INF                   | USB device driver file                        |
| SLSUSB.SYS                   | USB device driver file                        |
| SLS_USB_Driver_ Help_100.PDF | USB driver installation file                  |

<!-- image -->

## MAX19777 Evaluation System

## Quick Start

## Required Equipment

- MAX19777 EV System (USB cable included)
- +5.5V, 500mA DC power supply
- PC with a spare USB port
- Function generator
- ±5V, 200mA DC power supply
- +5V, 100mA DC power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and under-

lined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install  the  MAX19777EVKitSetupVx.x.exe  on  your computer
- 2) Verify that all jumpers are in their default positions, as shown in Table 1.
- 3) Connect  the  positive  terminal  of  the  +5.5V  power supply to the VIN connector on the MAXPRECADCMB1. Connect the negative  terminal  of  the  same power supply to the GND connector on the board.
- 4) Connect  the  MAX19777s  2x8  right  angle  female header  (J1)  to  the  MAXPRECADCMB1s  2x8  right angle male header (H2).
- 5) Connect the +5V power supply to the OP+ test points, -5V power supply to the OP- test point, and ground to the nearest GND test point.
- 6) Connect the +5V power supply to the 5V test point and the ground to the nearest GND test point.
- 7) Set the signal source to generate a 10kHz, +2.95V peak-to-peak sinusoidal wave.
- 8) Connect the positive terminal of the signal generator to the U1\_AIN1\_DC or U1\_AIN1\_DC\_SMA connector. Connect the negative terminal of the signal generator to the GND connector.
- 9) Turn on the power supplies.
- 10)  Turn on the function generator.
- 11) Connect the  USB cable  from  the  PC  to  the  EV  kit board.  Follow  the  instructions  on  the  SLS\_USB\_ Driver\_Help\_100.PDF file to manually install the USB driver. Administrator privileges are required to install the USB device driver on Windows.
- 12)  Start the EV kit software by opening its icon in the Windows All Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 13)  The main window should display Hardware Connected at the bottom-left corner
- 14)  Check the Remove DC checkbox.
- 15)  Press the Start Conversion button.
- 16) Verify that the Frequency displayed in the Calculation group box reads approximately 100000Hz.

## Evaluates: MAX19777

## Detailed Description of Software

The main window of the evaluation software (Figure 1) contains a Device Configuration group box, a Datalogging group box, and four tab sheets to display the sampled data.

## Device Configuration

Use  the Channel  Select drop-down  list  in  the Device Configuration group  box  to  select  the  analog  input channel for analog-to-digital conversion.

## Data Logging

In  the Datalogging group  box,  the  user  can  select the  desired  number  of  conversions  in  the Number  of Samples drop-down list. Enter the desired sampling rate in the Sample Rate (ksps) edit box. The actual sampling rate is displayed at the right of the Sample Rate (ksps) edit  box.  Press  the Start  Conversion button  to  start sampling. After  sampling  is  finished,  the  user  can  save the  data  to  a  file  by  pressing  the Save  to  File button. The Save to File button is not active until the sampling is done.

## Time Domain, Frequency Domain, Histogram, and Single Conversion Tabs

After  the Start  Conversion button  in  the Datalogging group  box  is  pressed,  the  sampled  data  in  the  time domain  is  plotted  in  the Time  Domain tab  sheet.  The sampled data in  the  frequency  domain  is  plotted  in  the Frequency Domain tab sheet, and the histogram of the sampled signal is plotted in the Histogram tab sheet.

## MAX19777 Evaluation System

Figure 1. MAX19777 EV Kit Software Main Window

<!-- image -->

The Single Conversion tab sheet displays one sampled data.

Check the Auto Convert checkbox to automatically and repeatedly do the ADC conversions and update the active tab sheet.

## Time Domain Tab

In  the Time  Domain tab  sheet  (Figure  2a  and  2b), check  the Remove  DC check  box  to  remove  the  DC component of the sampled signal. In the Scope Display Control  Vertical group  box,  when  the Auto  Scale checkbox is  checked,  the  software  automatically  scales the vertical axis in the plot. If the Auto Scale checkbox is unchecked, enter the appropriate values into the Y-MAX and Y-MIN edit boxes and press the Set button to set the boundaries for  the  vertical  axis.  The  software  automatically  calculates  the Frequency , RMS , MIN , MAX ,  and Avg DC of the sampled signal and displays the calculated values in the Calculation group box.

## Frequency Domain Tab

The Frequency  Domain tab  sheet  (Figure  3)  displays the FFT plot of the signal shown in the Time Domain tab sheet.

│

Figure 2a. Time Domain Tab

<!-- image -->

Figure 2b. Time Domain Tab (Zoomed In)

<!-- image -->

## MAX19777 Evaluation System

## Histogram Tab

The Histogram tab sheet (Figure 4) displays the histogram of the signal shown in the Time Domain tab sheet. The software  automatically  calculates  the Mean and  the Std  Dev (standard  deviation,  sigma)  and  displays  the calculated values in the Calculation group box.

The Histogram  Display  Control radio  group  box  provides  three  options  to  scale  the  horizontal  axis  on  the histogram:

- 1) (Mean - 3 sigma) to (Mean + 3 sigma)
- 2) (Mean - 6 sigma) to (Mean + 6 sigma)
- 3) User Define range

Figure 3. Frequency Domain Tab

<!-- image -->

## Single Conversion

The ADC  Value  Display group  box  in  the Single Conversion tab sheet (Figure 5) displays the ADC Code and calculated Voltage values for a single sample. Press the Start  Conversion button  in  the Datalogging group box  to  update  the  status  of  the ADC  Value  Display group box.

Evaluates: MAX19777

│

Figure 4. Histogram Tab

<!-- image -->

Figure 5. Single Conversion Tab

<!-- image -->

## MAX19777 Evaluation System

## Detailed Description of Hardware

The  MAX19777  EV  kit  is  a  fully  assembled  and  tested PCB  that  evaluates  the  MAX19777  2-channel,  12-bit, SPI-compatible 3Msps ADC. The EV kit comes installed with a MAX19777AZA+ in a 8-pin WLP package.

## Power Supplies

A  +5.5V  power  supply  is  required  to  power  up  the MAXPRECADCMB1.  Connect  the  positive  terminal  of the power supply to the VIN connector and the negative terminal  to  the  GND  connector.  +5V  power  supply  is required to power up the +3.0V reference to supply the MAX19777.

## On-Board Input Buffer

On-board input buffers (U9\_XXXX) are provided on the EV kit. To power the on-board buffers, connect the +5V, GND, and -5V terminals of the power supply to the OP+, GND, and OP- connectors, respectively.

## Analog Input 1

Move the shunt on jumper J18\_U1A to the 2-3 position and remove the shunts on jumpers J19\_U1A and J20\_U1A. The  user  can  connect  the  DC  signal  to  the  U1\_AIN1\_ DC\_SMA or U1\_AIN1\_AC connector and connect the DC offset to the U1\_AIN1\_DC\_SMA or U1\_AIN1\_DC connector. If the measuring signal has already been shifted above the ground level, short the AC input to ground by installing  a  shunt  on  J19\_U1A  and  connecting  the

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                 |
|----------|------------------|-------------------------------------------------------------------------------------------------------------|
| J2       | Installed*       | Connects V+ and OP+ together. OP+ is the positive supply of the op-amp on the analog front end of ADC.      |
| J2       | Not Installed    | Disconnects V+ from OP+. User must apply separate +5V supply at the V+ test point.                          |
| J2_U1    | 1-2              | Supply voltage from Master's VDDIO applied to VDD of the MAX19777 (U1).                                     |
| J2_U1    | 2-3*             | Supply voltage from on-board reference or external supply applied to VDD of the MAX19777 (U1).              |
| J2_BB    | 1-2              | Supply voltage from Master's VDDIO applied to VDD of the MAX19777 (break out board).                        |
| J2_BB    | 2-3*             | Supply voltage from on-board reference or external supply applied to VDD of the MAX19777 (break out board). |
| J3       | Installed*       | Connects V- and OP- which is the negative supply of the op-amp on the analog front end of ADC.              |
| J3       | Not Installed    | Disconnects V- from OP-. User must apply separate -5V supply at the V- test point.                          |
| J4       | Installed*       | Connects the MAX19777's DOUT signa via buffer (U2) to the master connection at J1-8.                        |
| J4       | Not Installed    | Disconnects the MAX19777's DOUT signal via buffer (U2) from the master's connection at J1-8.                |

│

Evaluates: MAX19777

measuring signal to the U1\_AIN1\_DC\_SMA or U1\_AIN1\_ DC  connector.  To  bypass  the  buffer  and  connect  the measuring signal directly  to  the AIN1  input  of  the ADC, remove the shunt on J21\_U1A. Then connect the measuring signal to the U1\_AIN1 connector.

## Analog Input 2

Move  the  shunt  on  jumper  J18\_U1B  to  the  2-3  position and  remove  the  shunts  on  jumpers  J19\_U1B  and J20\_U1B.  The  user  can  connect  the  AC  signal  to  the U1\_AIN2\_AC\_SMA  or  U1\_AIN2\_AC  connector  and connect  the  DC  offset  to  the  U1\_AIN2\_DC\_SMA  or U1\_AIN2\_DC  connector.  If  the  measuring  signal  has already  been  shifted  above  the  ground  level,  short  the AC  input  to  ground  by  installing  a  shunt  on  JU23  and connect the measuring signal to the U1\_AIN2\_DC\_SMA or  U1\_AIN2\_DC  connector.  To  bypass  the  buffer  and connect the measuring signal directly to the AIN2 input of the ADC, remove the shunt on J18\_U1B. Finally, connect the measuring signal to the U1\_AIN2 connector.

## User-Supplied SPI Interface

For user-supplied SPI, the user must remove the shunts on  headers  J8  to  J11.  The  use  can  apply  the  usersupplied SPI signals to pin 2 of header J8 to J11, respectively. Make sure return ground is connected to the MAX19777 EV kit.

## MAX19777 Evaluation System

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                     |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| J5       | Installed        | For break out board use only. Connects the break out board MAX19777's DOUT signal to the master's connection at connector pin J1-8.             |
| J5       | Not Installed*   | Disconnects the break out board MAX19777's DOUT signal from the master connection at connector pin J1-8.                                        |
| J6       | Installed*       | Connects the copied SCLK signal at the MAX19777 (U1) to the master's connection at connector pin J1-4.                                          |
| J6       | Not Installed    | Disconnects the copied SCLK signal at the MAX19777 (U1) from the master's connection at connector pin J1-4.                                     |
| J7       | Installed        | For break out board use only. Connects the copied SCLK signal at the break out board MAX19777 to the master's connection at connector pin J1-4. |
| J7       | Not Installed*   | Disconnects the copied SCLK signal at the break out board MAX19777 from the master's connection at connector pin J1-4.                          |
| J8       | 1-2*             | Connects the CS signal at connector pin J1-5 to the buffer (U3) input A.                                                                        |
| J8       | 2-3              | Connects the buffer (U3) input A to ground.                                                                                                     |
| J9       | 1-2*             | Connects the CHSEL signal at connector pin J1-7 to the buffer (U3) input B.                                                                     |
| J9       | 2-3              | Connects the buffer (U3) input B to ground.                                                                                                     |
| J10      | 1-2*             | Connects the the SCLK signal at connector pin J1-12 to the buffer (U2) input A.                                                                 |
| J10      | 2-3              | Connects the buffer (U2) input A to ground.                                                                                                     |
| J11      | 1-2*             | Connects MAX19777s (U1) DOUT to the buffer (U2) input B.                                                                                        |
| J11      | 2-3              | Connects the buffer (U2) input B to ground.                                                                                                     |
| J12      | 1-2              | For break out board use only. Connects the SCLK signal at connector pin J1-12 to the MAX19777 of the break out board.                           |
| J12      | 2-3*             | Connects the buffer (U5) input A to ground.                                                                                                     |
| J13      | 1-2              | For break out board use only. Connects the DOUT signal from the MAX19777 (break out board) to the buffer (U5) input B.                          |
| J13      | 2-3*             | Connects the buffer (U5) input B to ground.                                                                                                     |
| J14      | 1-2              | For break out board use only. Connects the CS signal at connector J1-5 to the buffer (U6) input to A.                                           |
| J14      | 2-3*             | Connects the buffer (U6) input to A to ground.                                                                                                  |
| J15      | 1-2              | For break out board use only. Connects CHSEL signal at the connector J1-7 to the buffer (U6) input to B .                                       |
| J15      | 2-3*             | Connects the buffer (U6) input to B to ground.                                                                                                  |

│

Evaluates: MAX19777

## MAX19777 Evaluation System

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                  |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------|
| J16      | Installed*       | +1.5V DC voltage offset on the AIN1 input of the MAX19777 (U1).                                                              |
| J16      | Not Installed    | Disconnects +1.5V DC voltage offset from the AIN1 input of the MAX19777 (U1).                                                |
| J17      | Installed        | +1.5V DC voltage offset on the AIN2 input of the MAX19777 (U1).                                                              |
| J17      | Not Installed*   | Disconnects +1.5V DC voltage offset from the AIN2 input of the MAX19777 (U1).                                                |
| J18      | Installed        | +1.5V DC voltage offset on the AIN1 input of the MAX19777 (breakout board).                                                  |
| J18      | Not Installed*   | Disconnects +1.5V DC voltage offset from the AIN1 input of the MAX19777 (break out board).                                   |
| J19      | Installed        | +1.5V DC voltage offset on the AIN2 input of the MAX19777 (breakout board).                                                  |
| J19      | Not Installed*   | Disconnects +1.5V DC voltage offset from the AIN2 input of the MAX19777 (breakout board).                                    |
| J18_U1A  | 1-2              | Bypass the op-amp (U9_U1A1) and connect directly to the input of the op-amp (U10_U1A1).                                      |
| J18_U1A  | 2-3*             | Connects the output of the op-amp (U9_U1A1) to the input of the op-amp (U10_U1A1).                                           |
|          | 1-2              | Bypass the op-amp (U9_U1B1) and connect directly to the input of the op-amp (U10_U1B1).                                      |
| J18_U1B  | 2-3*             | Connects the output of the op-amp (U9_U1B1) to the input of the op-amp (U10_U1B1).                                           |
| J18_BB1  | 1-2              | Bypass the op-amp (U9_BB1) and connect directly to the input of the op-amp (U10_BB1).                                        |
| J18_BB1  | 2-3*             | Connects the output of the op-amp (U9_BB1) to the input of the op-amp (U10_BB1).                                             |
| J18_BB2  | 1-2              | Bypass the op-amp (U9_BB2) and connect directly to the input of the op-amp (U10_BB2).                                        |
| J18_BB2  | 2-3*             | Connects the output of the op-amp (U9_BB2) to the input of the op-amp (U10_BB2).                                             |
| J19_U1A  | Installed*       | Connects to ground.                                                                                                          |
| J19_U1A  | Not Installed    | Apply analog signal at U1_AIN1_AC.                                                                                           |
| J19_U1B  | Installed*       | Connects to ground.                                                                                                          |
| J19_U1B  | Not Installed    | Apply signal at U1_AIN2_AC.                                                                                                  |
| J19_BB1  | Installed*       | Connects to ground.                                                                                                          |
| J19_BB1  | Not Installed    | Apply signal at BB_AIN1_AC.                                                                                                  |
| J19_BB2  | Installed*       | Connects to ground.                                                                                                          |
| J19_BB2  | Not Installed    | Apply signal at BB_AIN2_AC.                                                                                                  |
| J20      | Installed*       | Connects to +3.0V voltage reference (MAX6126) to the input of the buffer (U4).                                               |
| J20      | Not installed    | Disconnects +3.0V voltage reference MAX6126) from the input of the buffer (U4). User must apply +3.3V at EXT_VDD test point. |
| J20_U1A  | Installed        | Connects to ground.                                                                                                          |
| J20_U1A  | Not Installed*   | Apply DC signal at U1_AIN1_DC.                                                                                               |

│

Evaluates: MAX19777

## MAX19777 Evaluation System

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                    |
|----------|------------------|--------------------------------------------------------------------------------|
| J20_U1B  | Installed*       | Connects to ground.                                                            |
| J20_U1B  | Not Installed    | Apply DC signal at U1_AIN2_DC.                                                 |
| J20_BB1  | Installed*       | Connects to ground.                                                            |
| J20_BB1  | Not Installed    | Apply DC signal at BB_AIN1_DC.                                                 |
| J20_BB2  | Installed*       | Connects to ground.                                                            |
| J20_BB2  | Not Installed    | Apply DC signal at BB_AIN2_DC.                                                 |
| J21      | Installed        | Do not use. Negative supply (OP-) connects to ground.                          |
| J21      | Not Installed*   | Disconnects negative supply from ground. Apply -5V at OP- test point.          |
| J21_U1A1 | Installed*       | Connects op-amp (U10_U1A1) to AIN1 input of the MAX19777 (U1).                 |
| J21_U1A1 | Not Installed    | Disconnects op-amp (U10_U1A1) from AIN1 input of the MAX19777 (U1).            |
| J21_U1B1 | Installed*       | Connects op-amp (U10_U1A2) to AIN2 input of the MAX19777 (U1).                 |
| J21_U1B1 | Not Installed    | Disconnects op-amp (U10_U1A2) from AIN2 input of the MAX19777 (U1).            |
| J21_BB1  | Installed        | Connects op-amp (U10_BB1) to AIN1 input of the MAX19777 (breakout board).      |
| J21_BB1  | Not Installed*   | Disconnects op-amp (U10_BB1) from AIN1 input of the MAX19777 (breakout board). |
| J21_BB2  | Installed        | Connects op-amp (U10_BB2) to AIN2 input of the MAX19777 (breakout board).      |
| J21_BB2  | Not Installed*   | Disconnects op-amp (U10_BB2) from AIN2 input of the MAX19777 (breakout board). |
| U1_IDD   | Not Installed*   | Used only for voltage measurement of the current sense amplifier (U8_U1).      |
| BB_IDD   | Not Installed*   | Used only for voltage measurement of the current sense amplifier (U8_BB).      |

Evaluates: MAX19777

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX19777EVSYS# | EV System |
| MAX19777EVKIT# | EV Kit    |

# Denotes RoHS compliant.

│

## MAX19777 Evaluation System

## MAX19777 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                                                                                                                            | DNI/DNP   | QTY   | MFGPART#                                                                          | MANUFACTURER                                  | VALUE               | DESCRIPTION                                                                                                                   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------|-----------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1      | 5V, MISO, BB_CS, SCLK1, SCLK2, U1_CS, CS_LOW, BB_AIN1, BB_AIN2, BB_MISO, BB_SCLK, U1_AIN1, U1_AIN2, U1_MISO, U1_SCLK, BB_CHSEL, CHSEL_SW, U1_CHSEL, BB_AIN1_AC, BB_AIN1_DC, BB_AIN2_AC, BB_AIN2_DC, U1_AIN1_AC, U1_AIN1_DC, U1_AIN2_AC, U1_AIN2_DC | -         | 26    | 5012                                                                              | KEYSTONE                                      | N/A                 | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 2      | BBP1, BBP2                                                                                                                                                                                                                                         | -         | 2     | SSW-104-01-T-S                                                                    | SAMTEC                                        | SSW-104-01-T-S      | CONNECTOR; MALE; THROUGH HOLE; .025INCH SQ POST SOCKET; STRAIGHT; 4PINS                                                       |
| 3      | BB_AIN1_AC_SMA, BB_AIN1_DC_SMA, BB_AIN2_AC_SMA, BB_AIN2_DC_SMA, U1_AIN1_AC_SMA, U1_AIN1_DC_SMA, U1_AIN2_AC_SMA, U1_AIN2_DC_SMA                                                                                                                     | -         | 8     | 142-0701-201                                                                      | JOHNSON COMPONENTS                            | 142-0701-201        | CONNECTOR; FEMALE THREADED; THROUGH HOLE; SMA; STRAIGHT THROUGH; 5PINS                                                        |
| 4      | J2-J7, J16-J21, BB_IDD, U1_IDD, J19_BB1, J19_BB2, J19_U1A, J19_U1B, J20_BB1, J20_BB2, J20_U1A, J20_U1B, J21_BB1, J21_BB2, J21_U1A1, J21_U1A2                                                                                                       | -         | 26    | PEC02SAAN                                                                         | SULLINS                                       | PEC02SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                     |
| 5      | C1, C17                                                                                                                                                                                                                                            | -         | 2     | GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG            | MURATA; SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN | 1UF                 | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                      |
| 6      | C2, C3, C13, C14, C18-C20, C34_BB, C34_U1, C35_BB, C35_U1, C36_BB1, C36_BB2, C36_U1A, C36_U1B, C42_BB1, C42_BB2, C42_U1A, C42_U1B, C56_BB1, C56_BB2, C56_U1A, C56_U1B, C59_BB1, C59_BB2, C59_U1A, C59_U1B                                          | -         | 27    | GRM188R72A104KA35; CC0603KRX7R0BB104                                              | MURATA; TDK                                   | 0.1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                   |
| 7      | C4, C7, C8, C12, C15, C97_BB, C97_U1, C37_BB1, C37_BB2, C37_U1A, C37_U1B, C48_BB1, C48_BB2, C48_U1A, C48_U1B, C55_BB1, C55_BB2, C55_U1A, C55_U1B, C57_BB1, C57_BB2, C57_U1A, C57_U1B                                                               | -         | 23    | C2012X5R1V106K085                                                                 | TDK                                           | 10UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                      |
| 8      | C5, C6, C9-C11                                                                                                                                                                                                                                     | -         | 5     | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA                  | KEMET/MURATA/TDK/TAIYO YUDEN                  | 1UF                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X7R                              |
| 9      | C16                                                                                                                                                                                                                                                | -         | 1     | C1608X5R1V225K080AC; GRM188R6YA225KA12                                            | TDK/MURATA                                    | 2.2UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                     |
| 10     | C33_BB, C33_U1                                                                                                                                                                                                                                     | -         | 2     | C0603C475K8PAC;LMK107BJ475KA-T; CGB3B1X5R1A475K;C1608X5R1A475K080; CL10A475KP8NNN | KEMET; TAIYO YUDEN; TDK; SAMSUNG ELECTRONICS  | 4.7UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG=-55°C TO +85°C; TC = X5R                                       |
| 11     | C53_U1A, C53_U1B                                                                                                                                                                                                                                   | -         | 2     | GRM1885C1H102JA01; C1608C0G1H102J080                                              | MURATA; TDK                                   | 1000PF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                                              |
| 12     | V+, OP+, U1_VDD, EXT_VDD, J2_VDDIO                                                                                                                                                                                                                 | -         | 5     | 5005                                                                              | KEYSTONE                                      | N/A                 | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
| 13     | FB3                                                                                                                                                                                                                                                | -         | 1     | MMZ1608R301AT                                                                     | TDK                                           | 300                 | INDUCTOR; SMT (0603); FERRITE-BEAD; 300; TOL= ± 25%; 0.5A; -55°C TO +125°C                                                    |
| 14     | GND, GND1, GND3, GND_BB1, GND_BB2, GND_U1A, GND_U1B                                                                                                                                                                                                | -         | 7     | 5011                                                                              | KEYSTONE                                      | N/A                 | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 15     | J1                                                                                                                                                                                                                                                 | -         | 1     | PEC08DBAN                                                                         | SULLINS ELECTRONICS CORP                      | PEC08DBAN           | CONNECTOR; MALE; THROUGH HOLE; MALE BREAKAWAY HEADER; RIGHT ANGLE; 16PINS;                                                    |
| 16     | J8-J15, J2_BB, J2_U1, J18_BB1, J18_BB2, J18_U1A, J18_U1B                                                                                                                                                                                           | -         | 14    | PBC03SAAN                                                                         | SULLINS                                       | PBC03SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C                                                    |
| 17     | V-, OP-                                                                                                                                                                                                                                            | -         | 2     | 5125                                                                              | KEYSTONE                                      | N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 18     | R1-R5, R3_BB1, R3_BB2, R3_U1A, R3_U1B, R4_BB1, R4_BB2, R4_U1A, R4_U1B, R39_BB1, R39_BB2, R39_U1A, R39_U1B, R40_BB1, R40_BB2, R40_U1A, R40_U1B, R41_BB1, R41_BB2, R41_U1A, R41_U1B, R43_BB1, R43_BB2, R43_U1A, R43_U1B                              | -         | 29    | CRCW06031001FK; ERJ-3EKF1001V                                                     | VISHAY DALE; PANASONIC                        | 1K                  | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                             |
| 19     | R42_BB1, R42_BB2, R42_U1A, R42_U1B                                                                                                                                                                                                                 | -         | 4     | CRCW060310R0FK; MCR03EZPFX10R0                                                    | VISHAY DALE/ROHM                              | 10                  | RESISTOR; 0603; 10 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 20 21  | RSENSE1_BB, RSENSE1_U1 U1                                                                                                                                                                                                                          | - -       | 2 1   | WSL1206R1000F MAX19777                                                            | VISHAY DALE                                   | 0.1                 | RESISTOR; 1206; 0.1 Ω ; 1%; 75PPM; 0.25W; METAL STRIP VKIT PART-IC; MAX19777; PACKAGE OUTLINE: 21-100166A; WLP8               |
| 22     | U2, U3, U5, U6                                                                                                                                                                                                                                     | -         | 4     | NC7WV16P6X                                                                        | MAXIM FAIRCHILD SEMICONDUCTOR                 | MAX19777 NC7WV16P6X | IC; BUF; TINYLOGIC ULP-A DUAL BUFFER; SC70-6                                                                                  |
|        | U4, U7                                                                                                                                                                                                                                             | -         | 2     | LT1360CS8                                                                         | LINEAR TECHNOLOGY                             | LT1360CS8           | HIGH SPEED OPERATIONAL AMPLIFIER                                                                                              |
| 23 24  | U8                                                                                                                                                                                                                                                 | -         | 1     | MAX6126AASA33+                                                                    | MAXIM                                         | MAX6126AASA33+      | IC; VREF; ULTRA-HIGH-PRECISION ULTRA-LOW-NOISE SERIES VOLTAGE REFERENCE; NSOIC8                                               |
| 25     | U8_BB, U8_U1                                                                                                                                                                                                                                       | -         | 2     | MAX9929FAUA+                                                                      | MAXIM                                         | MAX9929FAUA+        | IC; AMP; -0.1V TO +28V INPUT RANGE; MICROPOWER; BIDIRECTIONAL; CURRENT-SENSE AMPLIFIER; UMAX8                                 |
| 26     | U9_BB1, U9_BB2, U10_BB1, U10_BB2, U9_U1A1, U9_U1A2, U10_U1A1, U10_U1A2                                                                                                                                                                             | -         | 8     | MAX4430EUK+                                                                       | MAXIM                                         | MAX4430EUK+         | IC; OPAMP; DUAL SUPPLY; ULTRA-LOW DISTORTION OP AMP; SOT23-5                                                                  |
| 27     | PCB                                                                                                                                                                                                                                                | -         | 1     | MAX19777                                                                          | MAXIM                                         | PCB                 | PCB:MAX19777                                                                                                                  |
| 28     | C99_BB, C99_U1, C100_BB, C100_U1, C49_BB1, C49_BB2, C49_U1A, C49_U1B, C53_BB1, C53_BB2, C54_BB1, C54_BB2, C54_U1A, C54_U1B, C58_BB1, C58_BB2, C58_U1A, C58_U1B                                                                                     | DNP       | 0     | N/A                                                                               | N/A                                           | OPEN                | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                      |
| 29     | C98_BB, C98_U1                                                                                                                                                                                                                                     | DNP       | 0     | N/A                                                                               | N/A                                           | OPEN                | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                                                      |
| 30     | L3_BB, L3_U1 R37_U1A, R37_U1B                                                                                                                                                                                                                      | DNP       | 0     | N/A N/A                                                                           | N/A N/A                                       | SHORT OPEN          | INDUCTOR; 1206 PACKAGE; SHORT; GENERIC PACKAGE OUTLINE 0603 RESISTOR                                                          |
| 31     | R37_BB1, R37_BB2,                                                                                                                                                                                                                                  | DNP       | 0     |                                                                                   |                                               |                     |                                                                                                                               |

Evaluates: MAX19777

## MAX19777 EV Kit Schematic

<!-- image -->

## MAX19777 Evaluation System

## MAX19777 EV Kit PCB Layout Diagrams

MAX19777 EV Kit-PCB Silkscreen Top Side

<!-- image -->

│

## MAX19777 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX19777 EV KitPCB Top View

│

## MAX19777 Evaluation System

## MAX19777 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX19777 EV KitPCB GND

│

## MAX19777 Evaluation System

## MAX19777 EV Kit PCB Layout Diagrams (continued)

MAX19777 EV Kit-PCB Power

<!-- image -->

│

## MAX19777 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX19777 EV Kit-PCB Silkscreen Bottom Side

│

## MAX19777 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX19777