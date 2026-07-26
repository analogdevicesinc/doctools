<!-- lastmod 2022-08-03 -->
## MAX22200 Evaluation Kit

## General Description

The MAX22200 evaluation kit provides a proven design to evaluate the MAX22200 solenoid driver. The MAX22200 integrated  circuit (IC) is an  eight  half-bridge, serialcontrolled  solenoid  driver  with  current  regulation.  The EV kit enables serial control of the MAX22200 and fault monitoring  through  an  on-board  USB  to  SPI  interface via  a  MAX32625 microcontroller.  It  includes  a  graphical user  interface  (GUI)  for  exercising  the  features  of  the MAX22200 IC, making it a complete PC-based evaluation system.

## Benefits and Features

- Easy evaluation of the MAX22200
- Configurable for High-Side/Low-Side Solenoid Driver
- Configurable for Latched Valves or Brushed DC Motors
- Windows® XP, 7, 8, 10 Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout

## MAX22200 EV Kit Files

| FILE                                              | DECRIPTION   |
|---------------------------------------------------|--------------|
| Setup MAX22200 Solenoid Driver EV Kit 1.1.2.0.exe | GUI Software |

Ordering Information appears at end of data sheet.

Evaluates: MAX22200

## Quick Start

## Required Equipment

- MAX22200 EV kit
- USB Type A male to micro-USB Type B male cable
- +36V DC, 1.5A power supply

It  is  recommended that the user read the MAX22200 IC datasheet prior to using the EV kit and GUI.

## Software Installation

- 1) Save the Setup MAX22200 Solenoid Driver EV Kit 1.1.2.0.exe file to your PC.
- 2) Click the Run button to begin the GUI installation.
- 3) Read the software license agreement and click the I accept the agreement button to continue.
- 4) Select the install directory and start menu folder name.
- 5) When installation is complete, click the Finish button to launch the MAX22200 EV kit GUI.

## Verifying COM Port

When connecting the MAX22200 EV kit to a PC, a new COM port appears under the ports (COM and LPT) device tree in Windows Device Manager.

- 1) To verify the COM port, launch Windows Device Manager and expand the ports (COM and LPT) section.
- 2) Connect the MAX22200 EV kit board to the PC.
- 3) After device enumeration, a new USB serial device appears along with the COM port.

<!-- image -->

## MAX22200 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. The following instructions  allow  the  user  to  begin  evaluation  of  the MAX22200 IC using a load and the MAX22200 EV kit and GUI.  Refer  to  the  Application  Diagram  and  Application Description in the MAX22200 IC data sheet for more information on output load topologies. Follow the steps below to verify board operation:

- 1) Verify that shunts are installed across pins 1-2, 3-4, 5-6, … , 17-18 of header J11.
- 2) Connect the MAX22200 EV kit to the PC using the USB Type A to micro-USB Type B cable.
- 3) Verify the COM port.
- 4) Connect a +4V to +36V DC power supply to the VM test point J6 and GND test point J7.
- 5) Turn on the supply.
- 6) Launch the MAX22200 GUI.
- 7) From the drop-down menu , select the COM port of the MAX22200.
- 8) Click the Connect button.
- 9) In the Control Panel tab, click the Enable button.
- 10)  Select the Active checkbox and click the Write Sta -tus Register button.
- 11)  The Status Register can now be read. Click the Read Status Register button to check the status of a part.
- 12)  Click the Read Status Register button again to clear any status faults.
- 13)  The Fault Register can now be read. Click the Read Fault Register button to check for faults.
- 14)  Click the Read Fault Register button again to clear any faults.
- 15)  In the Output Configuration section, click the dropdown arrows to select the output configuration for channel pairs. Ensure that loads and output header shunts are installed according to the output configu -

## Evaluates: MAX22200

ration selection. For example, if parallel operation is selected for channel pair CH0 and CH1, install a shunt across pins 1-2 of header J12.

- 16)  The TRIGA and TRIGB pins are brought up by the MCU in a logic high state. Click the TRIGA and TRIGB buttons to drive them low.
- 17)  In the Oscillator Frequency section, select the oscillator frequency .
- 18)  On the Channel Configuration tab, select the Channels checkboxes (CH0 to CH7) to be config -ured. Click Select All to configure all channels.
- 19)  If half full scale is preferred, select the HFS checkbox.
- 20)  To turn the output channels ON/OFF using the TRIGA and TRIGB inputs, select the TRGnSPI checkbox. Leave this box unchecked to use serial peripheral interface (SPI) writes from the GUI to turn the output channels ON/OFF.
- 21)  Select the VDRnCDR checkbox to operate in VDR mode. Leave this box unchecked to operate in CDR mode.

Note: CDR is supported in low-side configuration mode only.

- 22)  Select the HSnLS checkbox if high-side drive operation is preferred. Leave this box unchecked for lowside drive operation.
- 23)  If slower rise and fall edges are desired, click the SRC checkbox to enable Slew Rate Control. Rise and fall edges will be limited to 0.3uS in CDR and VDR modes for low side drive operation only.
- 24)  To enable Open Load Detection, select the OL\_EN checkbox.
- 25)  To enable HIT current check, select the HHF\_EN checkbox.
- 26)  Click the FREQ\_CFG drop-down arrow to select the chopping frequency.
- 27)  Adjust Hold Current based on VDR/CDR drive mode.

NOTE: For VDR HIT/Hold Currents, refer to tables 2 and 3 of the MAX22200 IC data sheet. For CDR HIT/ HOLD Currents, refer to table 4.

- 28)  Adjust Hit Current based on VDR or CDR drive mode. NOTE: For VDR HIT/Hold Currents, refer to tables 2 and 3 of the MAX22200 IC data sheet. For CDR HIT/ HOLD Currents, refer to table 4.
- 29)  Adjust Hit Current Time . Note: Refer to tables 1 and 5 in the MAX22200 IC datasheet.
- 30)  Click the Write Configuration Register button when configuration is complete.
- 31)  Repeat for other channels if programming individual channels.
- 32)  To turn a channel ON in SPI mode, on the Control Panel tab, select the preferred channel checkbox and click the Write On/Off Only button. To turn a channel OFF, deselect the channel checkbox and click the Write On/Off Only button again.
- 33)  To turn a channel ON in trigger mode, select the preferred channel checkbox. For channels 0, 2, 4, and 6, click the TRIGA button. For channels 1, 3, 5, and 7, click the TRIGB button. Click the corresponding TRIGA or TRIGB button again to turn the channels off.
- 34)  Prior to disabling the part or deselecting an active checkbox, verify all channels are in the OFF state.

## Detailed Description of Hardware

The MAX22200 EV kit features an on-board MAX32625 microcontroller that provides USB to SPI interface. It also provides a general purpose input/output (GPIO) interface, allowing the user to configure and control the MAX22200 IC  through  a  GUI.  The  on-board  microcontroller  also allows  the  user  to  monitor  and  display  fault  conditions and provides a GUI controlled trigger signal to manually control the MAX22200 outputs.

The MAX22200 EV kit has an on-board MAX14750 power management IC to provide the supplies needed for the MAX32625 microcontroller from the +5V USB VBUS. The MAX22200 IC is powered externally from a +4V to +36V DC supply in order to provide the voltage and current to drive solenoids and motors.

The MAX22200 EV kit has perforations down the middle of  the  board  to  separate  the  microcontroller  from  the MAX22200 IC. Once separated, the user can depopulate the  shunts  on  header  J11  and  use  the  even  numbered pins to communicate to the MAX22200 IC with their own controller. The MAX22200 IC SPI pins and logic pins are labeled on the right side of header J11. For normal operation with the on-board MAX32625 microcontroller and the MAX22200 EV kit GUI, shunts must be installed across pins 1-2, 3-4, 5-6, … , 17-18 of header J11.

## Detailed Description of Software

The  MAX22200 EV kit GUI has a Control  Panel  tab  to read  and  write  to  the  Status  Register  and  read  to  the Fault Register. It allows the user to enable the part, select a single or paired channel output configuration, select the oscillator  frequency,  and  turn  CH0-CH7  ON/OFF.  Fault flag, as well as per channel faults, can be read from this tab. The outputs can be polled or turned ON/OFF without writing to the full 32-bit Status Register by using the Read On/Off Only or Write On/Off Only buttons. Similarly, if in Triggered control mode, the outputs can be turned ON/ OFF using the TRIGA and TRIGB buttons.

The Channel Configuration tab is used to configure each channel's Configuration Register. To configure a channel, ensure  that  the  channel  is  turned  OFF  and  select  the channel  to  be  configured.  The  first  byte  of  each  channel  can  be  configured  when  the  channel  is  ON  using the Read  HFS/HOLD  Only or Write  HFS/HOLD  Only buttons. Once configured, click the Write Configuration Register button to write to the configuration register for the  selected  channels.  Verify  the  configuration  for  any channel by selecting that channel and clicking the Read Configuration Register button.

Evaluates: MAX22200

Figure 1. Control Panel tab

<!-- image -->

Figure 2. Channel Configuration tab

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22200EVKIT# | EV KIT |

## MAX22200 EV Kit Bill of Materials

| ITEM     | REF_DES              | QTY   | MFG PART #                                                            | MANUFACTURER                        | VALUE              | DESCRIPTION                                                                                                             | COMMENTS   |
|----------|----------------------|-------|-----------------------------------------------------------------------|-------------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1, C6, C8-C10       | 5     | GRM188R71E105KA12; TMK107B7105KA; 06033C105KAT2A; C1608X7R1E105K080AE | MURATA;TAIYO YUDEN; AVX;TAIYO YUDEN | 1UF                | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                            |            |
| 2        | C2, C5               | 2     | C1608X5R1A106K080AC                                                   | TDK                                 | 10UF               | CAP; SMT (0603); 10UF; 10%; 10V; X5R; CERAMIC                                                                           |            |
| 3        | C3, C4               | 2     | 04026D226MAT2A; CL05A226MQ5QUNC                                       | AVX;SAMSUNG                         | 22UF               | CAP; SMT (0402); 22UF; 20%; 6.3V; X5R; CERAMIC                                                                          |            |
| 4        | C7                   | 1     | C1005X5R1A104K050BA; LMK105BJ104KV                                    | TDK;TAIYO YUDEN                     | 0.1UF              | CAP; SMT (0402); 0.1UF; 10%; 10V; X5R; CERAMIC                                                                          |            |
| 5        | C17, C18             | 2     | UMK105BJ224KV                                                         | TAIYO YUDEN                         | 0.22UF             | CAP; SMT (0402); 0.22UF; 10%; 50V; X5R; CERAMIC                                                                         |            |
| 6        | C19                  | 1     | C1005X7S0J225K050BC; GRM155C70J225KE11                                | TDK;MURATA                          | 2.2UF              | CAP; SMT (0402); 2.2UF; 10%; 6.3V; X7S; CERAMIC                                                                         |            |
| 7        | C20                  | 1     | C0402C105K8PAC; CC0402KRX5R6BB105                                     | KEMET;YAGEO                         | 1UF                | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |            |
| 8        | C21                  | 1     | GRM155R71H223KA12                                                     | MURATA                              | 0.022UF            | CAP; SMT (0402); 0.022UF; 10%; 50V; X7R; CERAMIC                                                                        |            |
| 9        | C23                  | 1     | EEE-1HA220WAP                                                         | PANASONIC                           | 22UF               | CAP; SMT (CASE_D); 22UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                |            |
| 10       | D1, D9               | 2     | SML-P11MTT86                                                          | ROHM                                | SML-P11MTT86       | DIODE; LED; SMT; PIV=5V; IF=0.02A                                                                                       | GREEN LED  |
| 11       | D2-D8, D10, D13      | 9     | SML-P11UTT86                                                          | ROHM                                | SML-P11UTT86       | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                     | RED LED    |
| 12       | D11                  | 1     | VS-10BQ040-M3                                                         | VISHAY                              | VS-10BQ040-M3      | DIODE; SCH; SMT (DO-214AA); HIGH PERFORMANCE SCHOTTKY RECTIFIER; PIV=40V; IF=1.0A                                       |            |
| 13       | D12                  | 1     | SML-LX0404SIUPGUSB                                                    | LUMEX OPTOCOMPONENTS INC            | SML-LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF=2.95V; IF=0.1A                                   |            |
| 14       | J1                   | 1     | 10118193-0001LF                                                       | FCI CONNECT                         | 10118193-0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |            |
| 15       | J2                   | 1     | FTS-105-01-L-DV                                                       | SAMTEC                              | FTS-105-01-L-DV    | CONNECTOR; MALE; SMT; MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 10PINS;                                               |            |
| 16       | J3, J6               | 2     | 5010                                                                  | KEYSTONE                            | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 17       | J4                   | 1     | 1727010                                                               | PHOENIX CONTACT                     | 1727010            | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                               |            |
| 18       | J7, J8, J13-J15      | 5     | 5011                                                                  | KEYSTONE                            | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 19       | J9, J10              | 2     | OSTVN04A150                                                           | ON-SHORE TECHNOLOGY INC             | OSTVN04A150        | CONNECTOR; TERMINAL BLOCK; FEMALE; THROUGH HOLE; STRAIGHT; 4PINS                                                        |            |
| 20       | J11                  | 1     | PEC10DAAN                                                             | SULLINS ELECTRONICS CORP            | PEC10DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS                                                              |            |
| 21       | J12                  | 1     | OSTVN08A150                                                           | ON-SHORE TECHNOLOGY INC.            | OSTVN08A150        | CONNECTOR; FEMALE; THROUGH HOLE; SCREW TYPE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 8PINS                                   |            |
| 22       | J16                  | 1     | PBC02SAAN                                                             | SULLINS ELECTRONICS CORP.           | PBC02SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; - 65 DEGC TO +125 DEGC;                           |            |
| 23       | L1                   | 1     | VLS201612HBX-2R2M-1                                                   | TDK                                 | 2.2UH              | INDUCTOR; SMT; WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.97A                                                                 |            |
| 24       | L2                   | 1     | VLS201610CX-4R7M                                                      | TDK                                 | 4.7UH              | INDUCTOR; SMT (2016); FERRITE CORE; 4.7UH; TOL=+/-20%; 0.92A                                                            |            |
| 25       | R1                   | 1     | CR0402-16W-3091FT; ERJ-2RKF3091                                       | VENKEL LTD.;PANASONIC               | 3.09K              | RES; SMT (0402); 3.09K; 1%; +/-100PPM/DEGC; 0.0630W                                                                     |            |
| 26       | R2                   | 1     | CRCW04021K10FK                                                        | VISHAY DALE                         | 1.1K               | RES; SMT (0402); 1.1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                      |            |
| 27       | R3, R6-R12, R15, R20 | 10    | CRCW04021K40FK; RC0402FR-071K4L                                       | VISHAY DALE;YAGEO PHICOMP           | 1.4K               | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                      |            |
| 28       | R5, R13              | 2     | RC0402FR-071K5L                                                       | YAGEO PHYCOMP                       | 1.5K               | RES; SMT (0402); 1.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                                      |            |
| 29       | R14                  | 1     | ERJ-3GEYJ102                                                          | PANASONIC                           | 1K                 | RES; SMT (0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                                        |            |
| 30       | R17, R18             | 2     | CRCW060315K0FK                                                        | VISHAY DALE                         | 15K                | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |            |
| 31       | SW1                  | 1     | B3U-1000P                                                             | OMRON                               | B3U-1000P          | SWITCH; SPST; SMT; STRAIGHT; 12V; 0.05A; ULTRA-SMALL TACTILE SWITCH                                                     |            |
| 32       | U1                   | 1     | MAX22200                                                              | MAXIM                               | MAX22200           | EVKIT PART - IC; MAX22200; TQFN32-EP; PACKAGE OUTLINE DRAWING: 21-0140; PACKAGE LAND PATTERN: 90-0013                   |            |
| 33       | U2                   | 1     | MAX32625ITK+                                                          | MAXIM                               | MAX32625ITK+       | IC; UCON; ULTRA-LOW POWER; HIGH-PERFORMANCE CORTEX-M4 MICROCONTROLLER FOR WEARABLES; FLASH=512KB; SRAM=160KB; TQFN68-EP |            |
| 34       | U3                   | 1     | MAX14750BEWA+                                                         | MAXIM                               | MAX14750BEWA+      | IC; PWRM; POWER-MANAGEMENT SOLUTI0N; WLP25                                                                              |            |
|          |                      |       |                                                                       |                                     |                    | CRYSTAL; SMT 2.0 MMX1.2 MM; 6PF; 32.768KHZ; +/-10PPM;                                                                   |            |
| 35       | X1                   | 1     | ECS-.327-6-12-C                                                       | ECS INC                             | 32.768KHZ          | -0.03PPM/DEGC2                                                                                                          |            |
| 36 TOTAL | PCB                  | 1 69  | MAX22200                                                              | MAXIM                               | PCB                | PCB:MAX22200                                                                                                            | -          |

Evaluates: MAX22200

## MAX22200 EV Kit Schematics

<!-- image -->

│

## MAX22200 EV Kit Schematics (continued)

<!-- image -->

## MAX22200 EV Kit PCB Layout

MAX22200 EV Kit PCB-Silk Top

<!-- image -->

MAX22200 EV Kit PCB-Top

<!-- image -->

│

## MAX22200 EV Kit PCB Layout (continued)

MAX22200 EV Kit PCB-GND2

<!-- image -->

MAX22200 EV Kit PCB-PWR3

<!-- image -->

│

## MAX22200 EV Kit PCB Layout (continued)

MAX22200 EV Kit PCB-Bottom

<!-- image -->

MAX22200 EV Kit PCB-Silk Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX22200