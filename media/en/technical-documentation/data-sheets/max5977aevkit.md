<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## General Description

The  MAX5977A  EV  kit  is  a  hot-swap  controller  circuit board  providing  a  controlled  turn-on  for  high-power, high-capacitance loads, thus preventing glitches on the power-supply rail. The circuit uses a latching MAX5977A hot-swap controller IC in a 20-pin TQFN surface-mount package with an exposed pad. The EV kit operates from a 1V to 16V input source range connected at the VIN and GND connectors.

The IC controls two n-channel MOSFETs that deliver up to 40A of output current. The EV kit circuit ensures that the output voltage is stable and within the undervoltage (UV)  and  overvoltage  (OV)  thresholds.  The  circuit  continually  monitors load current to ensure that it does not exceed the circuit programmable fast and slow currentlimit  thresholds.  The  EV  kit  circuit  provides  a  buffered output  of  the  IC's  current-sense  amplifier  and  includes a precision current source providing a 2.5V output when enabling the IC's calibration-mode function.

The EV kit can also be used to evaluate the MAX5977B autoretry hot-swap controller after IC replacement of U1.

## Features

- S 1V to 16V Input Range
- S Demonstrates Latched-Fault Output
- S Configurable Input Undervoltage (9V) and Overvoltage (15V) Thresholds
- S Output Current Up to 40A
- S Configurable Slow and Fast Current-Limit Thresholds
- S Precision Current Monitoring
- S Calibration Mode
- S Selectable Digital Voltage Supply (VIO)
- S FAULT and Power-Good LED Indicators
- S Buffered Current-Sense Amplifier Output Drives External Circuitry
- S Evaluates MAX5977A Latched-Off Version
- S Evaluates MAX5977B Autoretry Version After IC Replacement
- S Surface-Mount Components
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                                                                               |   QTY | DESCRIPTION                                                            |
|-------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------|
| 2.5V_CAL, CALSENSE, FAULT , FCOMP, GATE, IN, OV, PG, PWR, REG, SCOMP, SENSE, TP1, TP3, UV |    15 | Small red test points                                                  |
| C1, C8, C9, C13, C14, C16                                                                 |     6 | 0.1 F F Q 10%, 50V X5R ceramic capacitors (0603) Murata GRM188R61H104K |
| C2, C15                                                                                   |     0 | Not installed, ceramic capacitors (0603)                               |

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| C3            |     1 | 1000pF Q 5%, 50V X5R ceramic capacitor (0603) Murata GRM1885C1H102J   |
| C4, C5, C10   |     3 | 1 F F Q 10%, 25V X5R ceramic capacitors (0603) Murata GRM188R61E105K  |
| C6, C7        |     2 | 10 F F Q 10%, 25V X5R ceramic capacitors (1206) Murata GRM31CR61E106K |
| C11           |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106K |
| C12           |     0 | Not installed, ceramic capacitor (0805)                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## Component List (continued)

| DESIGNATION         |   QTY | DESCRIPTION                                                                                                   |
|---------------------|-------|---------------------------------------------------------------------------------------------------------------|
| D1                  |     1 | 5A, 40V Schottky rectifier (SMC) Diodes Inc. B540C                                                            |
| D2                  |     1 | 3.9V zener diode (PowerDI ® 323) Diodes Inc. PD3Z284C3V9-7                                                    |
| D3                  |     1 | 20V, 600W unidirectional TVS (SMB) Diodes Inc. SMBJ18A (Top Mark: LT)                                         |
| D4                  |     1 | Red LED (1206)                                                                                                |
| D5                  |     1 | Green LED (1206)                                                                                              |
| GND (x2), VIN, VOUT |     4 | Screw terminals                                                                                               |
| JU1, JU3            |     2 | 3-pin headers                                                                                                 |
| JU2                 |     1 | 2-pin header                                                                                                  |
| N1, N2              |     2 | 25V, 100A n-channel MOSFETs (LFPAK) NXP Semi PSMN1R2-25YL                                                     |
| N3                  |     1 | Single n-channel logic-level MOSFET (SOT23) Central Semi 2N7002                                               |
| P1                  |     1 | Single p-channel logic-level MOSFET (SOT23) Fairchild Semi NDS0605                                            |
| Q1                  |     1 | npn transistor (SOT523) Fairchild MMBT2222ATCT (Top Mark: A02), or Diodes Inc. MMBT22AT-7-F (Top Mark: IP_ _) |
| R1, R2              |     2 | 249 I Q 5% resistors (0805)                                                                                   |
| R3, R4, R24         |     0 | Not installed, resistors (0603)                                                                               |
| R5, R14             |     2 | 100k I Q 1% resistors (0603)                                                                                  |
| R6                  |     1 | 453 I Q 1% resistor (0603)                                                                                    |

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| R7            |     1 | 825 I Q 1% resistor (0603)                                                |
| R8            |     1 | 0.5m I Q 1%, 3W sense resistor (3921) Vishay/Dale WSL3921L5000FEA         |
| R9, R13       |     2 | 20.0k I Q 1% resistors (0603)                                             |
| R10           |     1 | 49.9 I Q 1% resistor (0603)                                               |
| R11           |     1 | 4.12k I Q 1% resistor (0603)                                              |
| R12           |     1 | 4.99k I Q 1% resistor (0603)                                              |
| R15, R21, R22 |     3 | 100k I Q 5% resistors (0603)                                              |
| R16           |     1 | 7.15k I Q 1% resistor (0603)                                              |
| R17, R18      |     2 | 1 I Q 5% resistors (0603)                                                 |
| R19           |     1 | 10 I Q 5% resistor (0603)                                                 |
| R20           |     1 | 1k I Q 1% resistor (0603)                                                 |
| R23           |     1 | 0 I Q 5% resistor (0603)                                                  |
| SW1, SW2      |     2 | 3-position, top-slide DIP switches                                        |
| TP2, TP4-TP7  |     5 | Small black test points                                                   |
| U1            |     1 | Hot-swap controller (20 TQFN-EP) Maxim MAX5977AETP+                       |
| U2            |     1 | 2.5V voltage reference (6 SOT23) Maxim MAX6033AAUT25#G16 (Top Mark: ABDF) |
| U3            |     1 | High-precision op amp (6 SOT23) Maxim MAX4236EUT+ (Top Mark: AAUV)        |
| U4            |     1 | 3.3V 50mA linear regulator (8 SO-EP) Maxim MAX15006AASA+                  |
| -             |     3 | Shunts (JU1, JU2, JU3)                                                    |
| -             |     1 | PCB: MAX5977A EVALUATION KIT#                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX5977A	EV	kit
- 12V,	50A	DC	power	supply
- Three	voltmeters

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX5977A when contacting these component suppliers.

## Quick Start

## Required Equipment

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify  board  operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Verify  that  shunts  are  installed  across  pins  1-2  on jumpers JU1 and JU3.
- 2)  Verify that a shunt is installed on jumper JU2.
- 3)  Verify  that  switches  SW1  and  SW2  are  set  to  the on position.
- 4)  Utilizing  four  short  parallel-connected  16  AWG  wire, connect  the  positive  terminal  of  the  power  supply to  the  VIN  connector.  Utilizing  four  short  parallelconnected 16 AWG wire, connect the negative terminal of the power supply to the GND connector.
- 5)  Connect the first voltmeter positive and negative terminals to the VOUT and GND test points, respectively.
- 6)  Connect  the  second  voltmeter  positive  and  negative terminals to the VIO and GND PCB pads, respectively.
- 7)  Connect  the  third  voltmeter  positive  and  negative terminals  to  the  CSBUF  and  the  GND  PCB  pads, respectively.
- 8)  Enable the power supply.
- 9)  Verify that the voltmeters at VOUT, VIO, and CSBUF display 12V, 3.3V, and 2.5V, respectively.

VariableSpeed/BiLevel is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The  MAX5977A  EV  kit  is  a  hot-swap  controller  circuit board  providing  a  controlled  turn-on  for  high-power, high-capacitance loads, thus preventing glitches on the power-supply rail. The EV kit is designed to operate from a 1V to 16V DC power supply that provides up to 50A of current. The MAX5977A IC is available in a 20-pin (4mm x 4mm) TQFN package with an exposed pad.

The EV kit circuit uses a latching hot-swap controller IC that operates with a 1V to 16V input source range connected  at  the  VIN  and  GND  terminal  connectors.  The EV  kit  features  two  external  n-channel  MOSFETs  (N1, N2) for delivering up to 40A of continuous load current at  the  VOUT and GND terminal connectors. The circuit continually monitors the load current across resistor R8 for current-limit faults. The IC's VariableSpeed/BiLevel K circuit-protection function prevents the EV kit circuit from exceeding the programmed 42A and 45A slow and fast current-limit  fault  thresholds,  respectively.  The  EV  kit circuit also ensures that the output voltage is stable within the undervoltage (UV) and overvoltage (OV) thresholds, which are configured to 9V and 15V, respectively.

The  EV  kit  provides  CSOUT  and  GND  PCB  pads  for monitoring  the  IC's  transconductance  current-sense amplifier output. The amplifier has a 2.5 x 10 -3 S gain that is  applied across resistor R8 to monitor the EV kit load current. The amplifier gain is also applied across the IC's IN and CALSENSE inputs when the EV kit is configured for calibration  mode.  See  the Transconductance Amplifier/ Calibration  Mode section  for  additional  information.  An on-board MAX4236 op amp (U3) is available for buffering the current-sense amplifier output and can be used for driving external circuitry at the CSBUF and GND PCB pads.

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

Slide switch SW1 is provided to configure the EV kit in calibration mode. Slide switch SW2 is provided to disable the  hot-swap  controller  or  to  reset  (unlatch)  the  output after a current-limit fault has been removed. Green LED D5  indicates  power-good  status  and  red  LED  D4  indicates a current-limit fault condition. The EV kit circuit also uses the MAX15006A high-voltage input linear regulator (U4), which can provide a 3.3V logic supply for the EV kit digital signals.

The EV kit is designed on a four-layer, 2oz PCB, providing enhanced thermal dissipation for the power MOSFETs during turn-on and turn-off events. The EV kit also utilizes screw-terminal  connectors  at  VIN,  VOUT,  and  GND  for facilitating the circuit high-current capability.

## Current Limiting

The IC employs fast and slow current-limit comparators that compare the voltage across sense resistor R8. The IC's slow current-limit threshold is set to 42A by resistor R7 and the fast current-limit threshold is set to 45A by resistor R6.

When an overcurrent event occurs that is longer than the slow and fast comparator-response times, the hot-swap controller latches off the channel by turning off MOSFETs N1 and N2. After the fault has been removed, the controller  can  be reset by recycling the VIN power supply, or by pulling UV low and then high using slide switch SW2.

Refer to the Programmable Slow and Fast Current Limit section  in  the  MAX5977A/MAX5977B  IC  data  sheet  for information on selecting resistors when reconfiguring the EV kit current-limit thresholds.

## Gate Voltage

The IC integrates a charge pump that drives the GATE pin  to  5V  above  the  SOURCE  pin  voltage  (VOUT)  to fully enhance the external n-channel MOSFETs (N1 and N2).  The  gate  voltage  is  high  when  the  input  voltage is  between  the  UV  and  OV  thresholds  and  the  output current  has  not  exceeded  the  current-limit  thresholds. The GATE voltage can be monitored at the GATE and TP5 test points.

Table 1. U4 Input Power Source (JU1)

| SHUNT POSITION   | U4 IN PIN         | U4 INPUT POWER SOURCE   |
|------------------|-------------------|-------------------------|
| 1-2              | Connected to VIN  | VIN                     |
| 2-3              | Connected to VOUT | VOUT                    |
| Not installed    | Not connected     | No power applied        |

<!-- image -->

## Digital Supply Configuration

The EV kit circuit includes the option of selecting the circuit digital supply voltage using the on-board 3.3V linear regulator  (U4)  or  using  an  external  supply.  See  Tables 1 and 2 for proper JU1 and JU2 jumper configurations.

## U4 Linear Regulator Input Source (JU1)

The EV kit  features  an  option  to  select  the  input  power source  for  the  U4  3.3V  linear  regulator  output.  Jumper JU1  sets  the  U4  input-voltage  supply  using  the  power source applied at the VIN and GND connectors or the hotswap controller output (VOUT). Install a shunt across pins 1-2 to use the power source applied at the VIN and GND connectors. Install a shunt across pins 2-3 to use VOUT as the power source. See Table 1 for JU1 configuration.

## VIO Digital Supply Input Source (JU2)

Jumper JU2 selects the VIO digital supply voltage using the U4 linear regulator's 3.3V output, or by applying an external  supply  at  the  VIO  and  GND  PCB  pads.  Install a  shunt  on  jumper  JU2  to  set  the  VIO  supply  to  3.3V. Remove  the  shunt  on  JU2  and  apply  a  1.8V  to  5.5V external  supply  at  the  VIO  and  GND  PCB  pads.  See Table 2 for JU2 configuration.

## Input Power Selection (JU3)

The EV kit circuit features an option to select the power source for the IC's PWR power-supply input. Jumper JU3 selects  the  input-power  voltage  source  for  the  IC's  hotswap controller. Place a shunt across pins 1-2 to power the hot-swap controller using the power source applied at the VIN and GND connectors. Place a shunt across pins 2-3 to power the hot-swap controller using the VIO power source. See Table 3 for JU3 configuration.

## Table 2. VIO Digital Supply Selection (JU2)

| SHUNT POSITION   | VIO DIGITAL SUPPLY                               |
|------------------|--------------------------------------------------|
| Installed        | 3.3V                                             |
| Not installed*   | External voltage applied at VIO and GND PCB pads |

## Table 3. PWR Input Configuration (JU3)

| SHUNT POSITION   | IC PWR PIN                   | PWR INPUT RANGE (V)   |
|------------------|------------------------------|-----------------------|
| 1-2              | Connected to VIN through R19 | 2.7 to 16             |
| 2-3              | Connected to VIO through R19 | 2.7 to 5.5            |

Note: The IC requires a minimum 2.7V at the PWR input for operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## Transconductance Amplifier/Calibration Mode (SW1)

Slide switch SW1 is available to monitor the EV kit load current or to operate the IC in calibration mode. Set SW1 to the off position to monitor the circuit-load current. The voltage across resistor R8 is multiplied by the IC transconductance current-sense amplifier gain (2.5 x 10 -3 S). Set SW1 to the on position to operate the EV kit in calibration mode. In calibration mode, the EV kit circuit uses the MAX6033 2.5V voltage reference (U2) and various other components  to  provide  a  precision  current  source  for setting  the  differential  voltage  between  the  IC's  IN  and CALSENSE  inputs  to  25mV.  This  differential  voltage  is multiplied by the transconductance gain.

The transconductance amplifier output current is applied across  external  resistors  R9  and  R13,  with  the  voltage available  for  monitoring  at  the  CSOUT  and  GND  PCB pads.

When  the  EV  kit  is  configured  for  monitoring  the  load current, use the formula below to verify the load current:

<!-- formula-not-decoded -->

where:

VCSOUT is the voltage at the CSOUT PCB pad in volts. IOUT is the circuit's load current in amps.

R8 is the sense resistor in ohms.

R9 and R13 are the series resistors connected to the IC's CSOUT output in ohms.

GM is the IC's transconductance gain.

In  calibration  mode,  the  precision  25mV  input  signal between  IN  and  CALSENSE  causes  CSOUT  to  source 62.5 F A, or 2.5V across resistors R9 and R13. The 2.5V can be monitored at the CSOUT and GND test points. See Table 4 for slide switch SW1 configuration.

The EV kit circuit provides a MAX4236 op amp (U3) for buffering  the  current-sense  amplifier  output  (CSOUT). The  buffered  output  can  be  used  for  driving  external circuitry at the CSBUF and GND PCB pads.

## Undervoltage and Overvoltage Thresholds

The  EV  kit  UV  threshold  is  programmed  to  9V  using resistors R14 and R16. The EV kit OV threshold is programmed to 15V using resistors R5 and R11.

If  the  voltage  at  VIN  drops  below  the  UV  threshold  or exceeds  the  OV  threshold,  the  IC's  controller  turns  off MOSFETs N1/N2 and LED D5. The controller returns to normal  operation  when  the  input  voltage  returns  within the circuit UV and OV thresholds.

The  UV  and  OV  thresholds  can  be  reconfigured  by replacing  resistors  R14/R16  and  R5/R11,  respectively. Refer  to  the  MAX5977A/MAX5977B  IC  data  sheet  for additional  information  for  reconfiguring  the  UV  and  OV thresholds.

## Power-Good Output

The IC's power-good (PG) output signal is asserted high and LED D5 is on when the following conditions are met:

- VIN	is	within	the	UV	and	OV	programmed	limits.
- VIN	-	VOUT	is	less	than	100mV.
- V GATE - VOUT is greater than 4V.

The PG output signal can be monitored at the PG and TP6 (ground) test points.

## FAULT Output

The IC's FAULT output  signal  is  asserted  low  and  LED D4 is on whenever a slow or fast current-limit fault has occurred. The FAULT output signal can be monitored at the FAULT and TP7 (ground) test points.

## Latch-Fault Resetting (SW2)

The EV kit features slide switch SW2 to reset the controller  after  a  fault  condition  has  been  removed  by  pulling the UV pin below its 590mV (typ) threshold. The switch resets the channel and unlatches the fault when toggled from on to off. Recycling the supply applied at VIN also resets the controller.

## Evaluating the MAX5977B

The EV kit can also be used to evaluate the MAX5977B autoretry hot-swap controller. The MAX5977A (U1) must be removed and replaced with the MAX5977B. Request a free sample when ordering the EV kit.

## Table 4. Calibration Mode Configuration (SW1)

| POSITION   | CAL PIN                      | EV KIT OPERATION                                                       |
|------------|------------------------------|------------------------------------------------------------------------|
| On         | Connected to VIO through R22 | Calibration mode: Transconductance gain applied across IN and CALSENSE |
| Off        | Connected to ground          | Transconductance gain applied across resistor R8                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 1. MAX5977A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 2. MAX5977A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 3. MAX5977A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 4. MAX5977A EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 5. MAX5977A EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

<!-- image -->

Figure 6. MAX5977A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5977AEVKIT# | EV Kit |

# Denotes RoHS compliant.

12

## MAX5977A Evaluation Kit

## Evaluates: MAX5977A/MAX5977B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.