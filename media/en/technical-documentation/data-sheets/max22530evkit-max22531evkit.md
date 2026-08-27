<!-- lastmod 2022-08-04 -->
## MAX2253x Evaluation Kit

## General Description

The  MAX2253x  evaluation  kit  (EV  kit) provides the hardware and software necessary to evaluate the MAX22530 and MAX22531, quad channel isolated ADC with  field  supply.  The  graphical  user  interface  (GUI) running on a PC through a USB port communicates to the MAX22530 EV kit and MAX22531 EV kit.

The MAX22530 EV kit comes with the MAX22530AWE+ (16 WSOIC) device installed.

The MAX22531 EV kit comes with the MAX22531AAP+ (20 SSOP) device installed.

Windows ®  based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded from Maxim's website at www.maximintegrated.com/products/MAX22530-22532 (under the Design Resources tab). Windows 7 or newer Windows operating system is required to use the EV kit software.

## EV Kit Photo (MAX22530EVKIT#)

<!-- image -->

## Evaluates: MAX22530/MAX22531

## Features

- Easy Evaluation of MAX22530/MAX22531
- EV kit is USB Powered, No Field-Side Supply Required
- All Input Accessible
- Windows 7, Windows 8.1, and Windows 10Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested
- RoHS Compliant

## MAX2253x EV Kit Files

| FILE                         | DESCRIPTION                         |
|------------------------------|-------------------------------------|
| MAX2253xEVKitSetupV1.0.0.exe | Installs EV kit files onto computer |

## MAX2253x EV Kit Files

MAX22530 EV Kit Schematics MAX22530 EV Kit PCB Layouts MAX22531 EV Kit Schematics MAX22531 EV Kit PCB Layouts

## EV Kit Photo (MAX22531EVKIT#)

<!-- image -->

Ordering Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Required Equipment

- MAX2253x EV kit
- Micro-USB cable
- Windows  10,  Windows  8.1,  and  Windows  7  with  a spare USB port
- Multimeter
- DC voltage supply (up to 120V, 0.01A, or higher)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to  install  the  EV  kit  software,  make  required  hardware connections,  and  start  operation  of  the  kit.  The  EV  kit software can be run without hardware attached. Note that after  communication  is  established,  the  IC  must  still  be configured  correctly  for  desired  operation  mode.  Make sure the PC is connected to the internet throughout the process  so  that  the  USB  driver  can  be  automatically installed. See Table 1 and Table 2 .

1. Visit www.maximintegrated.com/products/MAX2253022532 under the Design Resources tab to download the  latest  version  of  the  MAX2253x  EV  kit  software (MAX2253xEVKitSetupVx.xx.ZIP).  Save  the  EV  kit software to a temporary folder and uncompress the zip file.
2.  Run  the  MAX2253xEVKitSetupVx.xx.EXE  program inside the temporary folder to install the EV kit software and USB driver. The program files are copied to the PC and icons are created in the  Windows Start | Programs  |  Maxim  Integrated menu.  During  the software  installation,  some  version  of  the  Windows may  show  a  warning  message  indicating  that  this software is from an unknown publisher. This is not an error  condition,  and  it  is  safe  to  proceed  with  the installation.  Administrator  privileges  are  required  to install the USB device driver.
3. Verify that all jumpers are in default positions ( Table 1 ).
4.  Connect the MAX2253x EV kit to the PC with the MicroUSB  cable.  Windows  automatically  recognizes  the

## Evaluates: MAX22530/MAX22531

device and displays a message near the System Icon menu indicating that the hardware is ready to use. Note on  the  EV  kit,  the  on-board  3.3V  USB  LED  supply (green LED) is on, indicating the hardware is powered up.

5.  Once the hardware is ready to use, launch the EV kit software by opening its icon from either the Desktop or Start | Programs menu. The EV kit software appears as shown in the Figure 1 .
6.  If the software is launched with the EV kit connected, the hardware is detected, and the lower-right status bar indicates Connected .  If  the  hardware  is  connected after the software is launched, from the Device menu, click Search for Hardware as shown in the Figure 2 . Then select a device in the list or use the default device already selected.
7.  Connect the positive terminal of the DC supply to pin 1 (IN1) of terminal J2 on the EV kit. Connect the negative terminal of the DC supply to pin 5 (AGND) of terminal J2 on the EV kit.
8.  Configure the DC supply output to be 100V and enable the supply output.
9. In the Configuration tab of the EV kit software, under SAMPLE  ADC  CHANNELS section,  click ADC1 to observe the attenuated signal level sampled to 1.64V. Any other voltage output selected at DC supply output is attenuated 61 times when observed at ADC1.
10.  Under  the BINARY  INPUT  COMPARATOR section, change the COMPARATOR MODE selection of CH1 to Digital Input mode and click the UPDATE CHANNELS button.
11.  Observe and verify that the indicator under COMP OUT section  under CH1 is  green  and  the CO\_POS\_1 indicator  under  the INTERRUPT STATUS section  is green.
12.  If  the  MAX22531  EV  kit  hardware  is  connected, observe and verify that the COUT1 LED (D1) on the EV kit is turned on.
13.  In  the ADC  Scope tab, Graph  Length selection enables plotting of selected number of samples. Click the Plot Data with Plot ADC1 or Plot FADC1 selection checked from the right side of the window. The channel 1 ADC data samples showing 1.64V are plotted in the left-top section of the GUI under ADC1

## EV Kit Block Diagram

<!-- image -->

Table 1. MAX2253x EV Kit Shunt Positions and Voltage Supply Settings

| HEADER   | SHUNT POSITION   | FUNCTION                                                                                                                                           |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| J3       | 1-2*             | Connects the V DDPL (logic side isolated DC-DC supply input) supply to the on-board 3.3V supply.                                                   |
| J3       | Not Installed    | Disconnects the V DDPL from on-board 3.3V. External supply is provided at VDDPL test point.                                                        |
| J4       | 2-3*             | Connects the V DDL (logic supply input) supply to the on-board 3.3V supply.                                                                        |
| J4       | 1-2              | Disconnects the V DDL from on-board 3.3V. V DDL is powered from an external supply provided at VDDL_EXT input of 12-pin header J1 (11) and J1(12). |

*Default options

Table 2. MAX2253x EV Kit J2 Terminal Description

| Terminal   |   POSITION | FUNCTION                                                                                                                                                           |
|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2         |          1 | Isolated ADC Channel 1 input. A 1:61 divider resistor network is present to attenuate the full-scale signal level from 0-110V to 0-1.8V at AIN1 input of MAX2253x. |
| J2         |          2 | Isolated ADC Channel 2 input. A 1:61 divider resistor network is present to attenuate the full-scale signal level from 0-110V to 0-1.8V at AIN2 input of MAX2253x. |
| J2         |          3 | Isolated ADC Channel 3 input. A 1:61 divider resistor network is present to attenuate the full-scale signal level from 0-110V to 0-1.8V at AIN3 input of MAX2253x. |
| J2         |          4 | Isolated ADC Channel 4 input. A 1:61 divider resistor network is present to attenuate the full-scale signal level from 0-110V to 0-1.8V at AIN4 input of MAX2253x. |
| J2         |          5 | GND. Field side analog ground.                                                                                                                                     |

## Detailed Description of Software

The main window of the EV kit software contains three tabs: Configuration , ADC Scope , and Register Settings . The Configuration tab provides the controls to directly configure the MAX22530/MAX22531 features such as comparator modes, upper and lower thresholds, individual channel sampling, device control, fault status reporting, etc., The ADC Scope tab plots the ADC readings and filtered ADC readings in the time domain graph. The Register Settings tab lists all  the  registers  in  the  MAX22530/MAX22531  and  provides  direct  read  and  write  access  to  all  the  control  bits.  The MAX2253x EV kit software can work with both the MAX22530EVKIT# and MAX22531EVKIT#. The Device menu allows the user to select the device and to connect or disconnect to the hardware by choosing detected serial numbers.

## Configuration Tab

The Configuration tab provides an interface for configuring the MAX22530/MAX22531 from a functional perspective. This tab is divided into four sections: SAMPLE ADC CHANNELS , BINARY INPUT COMPARATOR , CONTROL , and INTERRUPT STATUS .  The SAMPLE ADC CHANNELS section contains individual channel single read operation on ADC1 to ADC4 and FADC1 to FADC4 (filtered ADC) respectively. It also has ENABLE BURST READ selection which performs single  burst  read  operation.  With  the ENABLE BURST READ checked,  the BURST registers READ ADC provides sample data of ADC1 through ADC4; and the Status Register is indicated in the INTERRUPT STATUS section. With ENABLE BURST READ checked,  the BURST READ FADC provides  sample  data  of FADC1 through FADC4 registers and the Status Register is indicated in the INTERRUPT STATUS section. The REFERENCE value set to 1.8V in the EV kit GUI is the integrated field-side reference output internally generated by the MAX22530 and MAX22531. The REFERENCE field input can be changed from 1.75V to 1.85V based on the actual voltage measured at the REF output across C20 or C31 output capacitor to improve the ADC reading accuracy.

The BINARY INPUT COMPARATOR section controls the settings to configure the internal digital comparators CO\_1 to CO\_4. The Comparator Mode section enables either Digital Input mode or Digital Status mode . The FILTER option with ON or OFF allows enabling or disabling the internal moving average filter. The EV kit hardware has field-side input divider network of 1kΩ and 60kΩ. With a 1:61 resistive divider network at EV kit, the input connected at J2 terminal can be up to 110V full scale. This divider ratio of 1:61 is the common default setting in the EV kit GUI software. This setting can be changed to the resistive network modified at the inputs of each ADC. The hysteresis points, UPPER THRESHOLD and LOWER THRESHOLD values of the comparator are selected with respect to the full-scale input which is associated with the DIVIDER RATIO (1: N) setting. The resolution of this threshold value is ~27mV while the + and - button changes the threshold value by 0.5V.  Once the UPDATE CHANNELS button is clicked, the threshold values change to reflect the register value to the nearest digit.  Manual typing of the threshold value is also allowed.  However, when the UPDATE CHANNELS is clicked, the value reflects the register content to the nearest digit as well.

The CONTROL section allows the user to configure and control the ADC. The RESET control provides options to disable field  power  ( DISPWR ),  perform  a  hard  (full)  reset  ( RSET ),  or  perform  a  soft  (register)  reset  ( SRES ).  The CLEAR checkboxes provide a clear POR option and reset individual channel moving average filters of ADC channel 1 to 4 through ADC1  Filter to ADC4  Filter checkbox  controls.  The ENABLE  INTERRUPT checkboxes  and COUT  INTERRUPT ENABLE checkboxes enable or disable a hardware interrupt on the INT output pin. The ENABLE checkboxes enable or disable SPI CRC functionality option and the common threshold ( CMN TH ) option. Enabling the common threshold option forces all the internal digital comparators CO\_1 to CO\_4 to take upper and lower threshold values of CO-1 (CO\_HI\_TH\_1 and CO\_LO\_TH\_1 ). Reading the register values of CO\_2 to CO\_4 will not show these values.  Also, CH2 to CH4 threshold will be in disabled and cannot be changed.

Figure 1. Configuration Tab

<!-- image -->

Figure 2. MAX2253x EV Kit Software Startup Window

<!-- image -->

## ADC Scope Tab

The ADC Scope tab displays the ADC readings and filtered ADC readings in the time domain as a number of samples. Individual scope section displays for each channel (ADC1 to ADC4) are provided. In each ADC\_ graph, ADC\_ and/or FADC\_ data plots can be viewed. By clicking the Plot Data button, the software reads and plots the number of samples of ADC register and/or the filtered ADC register. It also displays the results based on the selection from the Graph Length .

Figure 3. ADC Scope Tab

<!-- image -->

## Register Settings Tab

The Register  Settings tab  shows  all  the  MAX22530/MAX22531  registers  information  including  the  register  name, address, value, read or write accessibility, and the register description. The value of the cell can be changed by the user if  the  register is writable. Clicking the Write Modified button after changing the value writes the new contents to the register. Clicking the Read All button reads all registers and refreshes the window with register settings.

Figure 4. Register Settings Tab

<!-- image -->

## Detailed Description of Hardware

The  MAX22530/MAX22531  EV  kit  is  an  easy-to-use  solution  to  evaluate  the  MAX22530/MAX22531,  quad  channel isolated ADC for industrial applications. The EV kit hardware comes with a MAX22530/MAX22531 device with an input resistive divider network to support a full-scale voltage up to 110V at the J2 terminal. The logic and field side are isolated on  the  EV  kit  PCB  as  well  with  the  90pF  PCB  stitching  cap  introduced  across  the  two  sides  for  radiated  emissions performance with the CISPR32 standards.

The EV kit comes with up to ±7kV/42Ω surge protection at field channel inputs to field/analog ground.

## Device Powering Options

With the default jumper settings, the EV kit is powered entirely from the USB supplied power. The 5V USB power is used to generate the on-board regulated 3.3V (3V3\_USB) that powers the EV kit. The VDDL and VDDPL power supply inputs are connected to the on-board supply. Alternatively, external low-voltage supplies can be connected to the VDDL and VDDPL test points with jumper J3 and J4 settings changed as per Table 1 .

## SPI Interface

The  EV  kit  software  communicates  over  USB  to  the  SPI  interface  and  supports  the  full  10MHz  clock  rate  for  the MAX22530/MAX22531. If the users wish to interface to their own microcontroller or FPGA, change the contact position of the switch SW1 to OFF position and hardwire the SPI signals and the external supply to the 12-pin header terminal provided by J1. During this condition, the external VDDL supply (VDDL\_EXT) is provided by the user. A separate supply is provided to the VDDPL jumper J3. Table 3 describes the EV kit 12 pin header J1 that is used to connect and operate with an external device. Table 4 shows the position of switch SW1 that enables either internal or external communication for interfacing with the MAX22530/MAX22531.

Table 3. J1 Connector for Interface with External Communication Device

|   TERMINAL J1 INPUT | ASSOCIATED SIGNAL   |
|---------------------|---------------------|
|                   1 | CS                  |
|                   2 | INT                 |
|                   3 | MOSI/ DIN/ SDI      |
|                   4 | DGND                |
|                   5 | MISO/ DOUT/ SDO     |
|                   6 | DGND                |
|                   7 | SCLK                |
|                   8 | DGND                |
|                   9 | DGND                |
|                  10 | DGND                |
|                  11 | VDDL_EXT            |
|                  12 | VDDL_EXT            |

## Table 4. Switch Position

| SW1 SLIDE POSITION   | SELECTION                                                                                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ON                   | On-board FTDI, USB to GPIO signal selected for SPI communication. The Micro-USB cable is connected to the connector slot X1.                                                                    |
| OFF                  | External Communication device selected for SPI communication. The Micro-USB cable is not connected to the connector slot X1. External VDDL and VDDPL supplies applied to the MAX22530/MAX22531. |

## ADC Input (AIN) Resistor Divider

An external high voltage needs to be divided down to meet the ADC full-scale range (0 to 1.8V (VREF)) and to compare this input to user-configured comparator lower and upper thresholds. The absolute maximum voltage for the ADC input is -0.3V to +2V and the user must ensure that any external voltage applied to the EV kit does not cause this range to be exceeded at any of the AIN pin of the MAX22530/MAX22531 device. Exceeding this range could permanently damage the IC. The input voltage is connected to terminal block J1 and is attenuated by the network of four 15kΩ thick film resistors in series with a 1kΩ resistor providing up to 1.8V at the ADC input when 110VDC is applied to J1. The user should be aware of the hazards associated with higher voltages, which could cause any of the associated test points or circuit traces to have a hazardous potential.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22530EVKIT# | EV Kit |
| MAX22531EVKIT# | EV Kit |

#Denotes RoHS-compliance.

## MAX22530 EV Kit Bill of Materials

| PART                                                      |   QTY | DESCRIPTION                                                                                                                                    |
|-----------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------|
| AIN1-AIN4, CSB, DIN, DOUT, INTB, SCLK, TP1, TP2, TP5, TP6 |    13 | TEST POINT; SMT; PIN LENGTH=0.135IN; PIN WIDTH=0.07IN; PIN HEIGHT=0.06IN; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT                    |
| C1                                                        |     1 | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                                                  |
| C2                                                        |     1 | CAP; SMT (0603); 0.47UF; 10%; 50V; X7R; CERAMIC                                                                                                |
| C3                                                        |     1 | CAP; SMT (0603); 1000PF; 5%; 100V; C0G; CERAMIC                                                                                                |
| C4                                                        |     1 | CAP; SMT (0603); 0.01UF; 10%; 200V; X7R; CERAMIC                                                                                               |
| C5                                                        |     1 | CAP; SMT (0805); 22UF; 10%; 16V; X5R; CERAMIC                                                                                                  |
| C6, C7, C10, C11, C15- C19, C21, C22, C99                 |    12 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                |
| C8, C9, C14                                               |     3 | CAP; SMT (0805); 4.7UF; 10%; 25V; X7R; CERAMIC                                                                                                 |
| C12, C13                                                  |     2 | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                                                                   |
| C20, C23                                                  |     2 | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                                                   |
| C24, C25                                                  |     2 | CAP; SMT (0402); 1UF; 10%; 25V; X6S; CERAMIC                                                                                                   |
| C26, C27, C29-C32                                         |     6 | CAP; SMT (0603); 0.01UF; 5%; 25V; C0G; CERAMIC                                                                                                 |
| C28                                                       |     1 | CAP; SMT; 1000PF; 20%; 250V; E; CERAMIC                                                                                                        |
| C33, C34                                                  |     2 | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R; CERAMIC                                                                                                 |
| DS1, LED_USB                                              |     2 | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                                      |
| EGND                                                      |     1 | EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| J1                                                        |     1 | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                                       |
| J2                                                        |     1 | CONNECTOR; FEMALE; THROUGH HOLE; 10.16MM PITCH; SIDE WIRE ENTRY STACKING WITH INTERLOCK; TERMINAL BLOCK; STRAIGHT; 5PINS                       |
| J3                                                        |     1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                      |

## MAX2253x Evaluation Kit

## Evaluates: MAX22530/MAX22531

| J4                                        |   1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
|-------------------------------------------|-----|-------------------------------------------------------------------------------------------------------------------------|
| L1, L3, L4                                |   3 | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                                               |
| L2                                        |   1 | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A                                                             |
| MH1-MH4                                   |   4 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
| R1                                        |   1 | RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R2, R3                                    |   2 | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R4, R6                                    |   2 | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R5                                        |   1 | RES; SMT (0603); 2.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
| R7                                        |   1 | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R8                                        |   1 | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R9, R13                                   |   2 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R10-R12, R14, R16, R18, R20, R22, R38-R45 |  16 | RES; SMT (2512); 15K; 1%; +/-100PPM/DEGC; 1W                                                                            |
| R17, R19, R21, R23                        |   4 | RES; SMT (0805); 1K; 1%; +/-100PPM/DEGC; 0.5000W                                                                        |
| R24-R36                                   |  13 | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                 |
| R37                                       |   1 | RES; SMT (0603); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |
| R46                                       |   1 | RESISTOR;THROUGH-HOLE;10M;1%;100PPM;1/8W;METAL FILM                                                                     |
| SW1                                       |   1 | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                  |
| TP3, TP4, TP7, TP8                        |   4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| U1                                        |   1 | EVKIT PART -IC; MAX22530; PACKAGE LAND PATTERN DRAWING: 90-0107; WSOIC16; 300MIL; WSOIC16 300MIL                        |
| U2                                        |   1 | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                  |
| U3                                        |   1 | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                          |
| U4                                        |   1 | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                       |
| VDDL, VDDL_EXT, VDDPL                     |   3 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
| X1                                        |   1 | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS         |
| Y1                                        |   1 | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                          |

## MAX22530 EV Kit Schematics

<!-- image -->

## MAX22530 EV Kit Schematics (continued)

<!-- image -->

## MAX22530 EV Kit PCB Layouts

MAX22530 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22530 EV Kit PCB Layout-Top

<!-- image -->

MAX22530 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX22530 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX22530 EV Kit PCB Layouts (continued)

MAX22530 EV Kit PCB Layout-Bottom

<!-- image -->

## MAX22531 EV Kit Bill of Materials

| PART                                                                    |   QTY | DESCRIPTION                                                                                                                                    |
|-------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------|
| AIN1-AIN4, COUT1, COUT2, CSB, DIN, DOUT, INTB, SCLK, TP1, TP2, TP5, TP6 |    15 | TEST POINT; SMT; PIN LENGTH=0.135IN; PIN WIDTH=0.07IN; PIN HEIGHT=0.06IN; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT                    |
| C1                                                                      |     1 | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                                                  |
| C2                                                                      |     1 | CAP; SMT (0603); 0.47UF; 10%; 50V; X7R; CERAMIC                                                                                                |
| C3                                                                      |     1 | CAP; SMT (0603); 1000PF; 5%; 100V; C0G; CERAMIC                                                                                                |
| C4                                                                      |     1 | CAP; SMT (0603); 0.01UF; 10%; 200V; X7R; CERAMIC                                                                                               |
| C5                                                                      |     1 | CAP; SMT (0805); 22UF; 10%; 16V; X5R; CERAMIC                                                                                                  |
| C6, C7, C10, C11, C15-C19, C21, C22, C99                                |    12 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                |
| C8, C9, C14                                                             |     3 | CAP; SMT (0805); 4.7UF; 10%; 25V; X7R; CERAMIC                                                                                                 |
| C12, C13                                                                |     2 | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                                                                   |
| C20, C23-C25                                                            |     4 | CAP; SMT (0402); 1UF; 10%; 25V; X6S; CERAMIC                                                                                                   |
| C26, C27, C29, C30                                                      |     4 | CAP; SMT (0603); 0.01UF; 5%; 25V; C0G; CERAMIC                                                                                                 |
| C28                                                                     |     1 | CAP; SMT; 1000PF; 20%; 250V; E; CERAMIC                                                                                                        |
| C31-C34                                                                 |     4 | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R; CERAMIC                                                                                                 |
| D1, D2                                                                  |     2 | DIODE; LED; GREEN; SMT; VF=1.8V; IF=0.002A                                                                                                     |
| DS1, LED_USB                                                            |     2 | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                                                      |
| EGND                                                                    |     1 | EVKIT PART - MAXIM PAD; TEST POINT; PIN DIA=0.094IN; TOTAL LENGTH=0.350IN; BOARD HOLE=0.040IN; NONE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

MAX22530 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX2253x Evaluation Kit

## Evaluates: MAX22530/MAX22531

| J1                                         |   1 | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                 |
|--------------------------------------------|-----|--------------------------------------------------------------------------------------------------------------------------|
| J2                                         |   1 | CONNECTOR; FEMALE; THROUGH HOLE; 10.16MM PITCH; SIDE WIRE ENTRY STACKING WITH INTERLOCK; TERMINAL BLOCK; STRAIGHT; 5PINS |
| J3                                         |   1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |
| J4                                         |   1 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
| L1, L3, L4                                 |   3 | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                                                |
| L2                                         |   1 | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A                                                              |
| MH1-MH4                                    |   4 | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
| R1                                         |   1 | RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R2, R3                                     |   2 | RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |
| R4, R6                                     |   2 | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R5                                         |   1 | RES; SMT (0603); 2.2K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R7                                         |   1 | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R8                                         |   1 | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R9, R13                                    |   2 | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                         |
| R10-R12, R14, R16, R18, R20, R22, R38- R45 |  16 | RES; SMT (2512); 15K; 1%; +/-100PPM/DEGC; 1W                                                                             |
| R15, R47                                   |   2 | RES; SMT (0603); 499; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| R17, R19, R21, R23                         |   4 | RES; SMT (0805); 1K; 1%; +/-100PPM/DEGC; 0.5000W                                                                         |
| R24-R36, R48-R51                           |  17 | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                  |
| R37                                        |   1 | RES; SMT (0603); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| R46                                        |   1 | RESISTOR;THROUGH-HOLE;10M;1%;100PPM;1/8W;METAL FILM                                                                      |
| SW1                                        |   1 | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000M OHM                   |
| TP3, TP4, TP7, TP8                         |   4 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| U1                                         |   1 | EVKIT PART - IC; MAX22531; PACKAGE OUTLINE DRAWING: 21-0056; LAND PATTERN DRAWING: 90-0094; SSOP20                       |
| U2                                         |   1 | IC; CONV; PWM STEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                   |
| U3                                         |   1 | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                           |
| U4                                         |   1 | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                        |
| VDDL, VDDL_EXT, VDDPL                      |   3 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
| X1                                         |   1 | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS          |
| Y1                                         |   1 | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                           |

## MAX22531 EV Kit Schematics

<!-- image -->

## MAX22531 EV Kit Schematics (continued)

<!-- image -->

## MAX22531 EV Kit PCB Layouts

MAX22531 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22531 EV Kit PCB Layout-Top

<!-- image -->

MAX22531 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX22531 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX22531 EV Kit PCB Layouts (continued)

MAX22531 EV Kit PCB Layout-Bottom

<!-- image -->

MAX22531 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/21            | Initial release                                                                                | -               |
|                 1 | 9/21            | Updated EV Kit Photo (MAX22530EVKIT#) , EV Kit Photo (MAX22531EVKIT#) and Ordering Information | 1, 9            |

Evaluates: MAX22530/MAX22531