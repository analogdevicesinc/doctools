<!-- lastmod 2022-08-02 -->
## MAX1758 Dual-Phase Evaluation Kit

## General Description

The  MAX17558  dual-phase  EV  kit  provides  a  proven design to evaluate the MAX17558 wide 4.5V to 60V input, dual-phase, synchronous step-down DC-DC controller. In 2-phase  operation,  the  two  channels  of  the  MAX17558 are  operated  180°  out  of  phase.  This  interleaves  the current  pulses  drawn  by  the  2  phases,  and  results  in reduced  total  RMS  input  current,  which  allows  use  of lesser  number  of  input  capacitors.  The  EV  kit  provides 3.3V/20A at the outputs from a 6V to 54V input supply. The switching frequency of the EV kit is preset to 350kHz for optimal efficiency and component size. The EV kit features adjustable input undervoltage-lockout and soft-start time, selectable  PWM/DCM  modes,  180°  out-of-phase/0°  inphase operation, current-limit threshold, and independent open-drain PGOOD signals.

## Features

- 6V to 54V Input Range
- Output Rails: V OUT : 3.3V/20A
- 350kHz Switching Frequency
- Independent Enable Inputs
- Independent Adjustable Soft-Start Time
- Configurable Tracking Operation
- Selectable PWM/DCM Modes of Operation
- Selectable 180° Out-of-Phase/0° In-Phase Operation
- Selectable Current-Limit Threshold
- Independent PGOOD Outputs
- Overcurrent, Overvoltage, and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX1758

## Quick Start

## Required Equipment

- MAX17558 EV kit 6V to 54V
- 4.5V to 54V, 15A DC power supply
- Loads capable of sinking 20A
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Ensure that the DC power supply is disabled. Set the power supply voltage to 24V.
- 2) Set the load to 20A. Disable the load in the case of an electronic load. Leave the load unconnected in the case of a resistor load and ensure that the resistor power rating is high enough to dissipate the output power.
- 3) Connect the positive terminal of the power supply to the VIN connector and the negative terminal of the power supply to PGND connector, which is nearest to VIN connector.
- 4) Connect a digital voltmeter across VOUT connector and the nearest PGND connector with the positive terminal of the DVM connected to VOUT connector.
- 5) Verify the shunts on jumpers, as described in Table 1, to select default settings of the EV kit.
- 6) Turn on the DC power supply.
- 7) Verify that the digital voltmeter displays the expected voltage (3.3V±1%).
- 8) Enable the electronic load (connect the load in the case of resistor load).
- 9) Verify that the voltmeter displays the expected voltage (3.3V±1%).

<!-- image -->

## MAX17558 Dual-Phase Evaluation Kit

## Detailed Description of Hardware

The  EV  kit  provides  a  proven  design  to  evaluate  the device. The EV kit provides 3.3V/20A at the outputs from 6V to 54V input supply. The EV kit is preset to operate at 350kHz for optimum efficiency and component size.

The EV kit provides set resistors R16, R17 and R18, R19 and jumpers JU4, JU5 to enable/disable the output at a desired input UVLO voltage. The DCM or PWM mode of operation can be selected using JU3. JU1 allows selection of 180°/0° phase-shift operation between the two controllers. JU2  allows  the  selection  of  three  different  current-limit thresholds for both controllers. Refer to Table 2 through Table 4 for additional jumper setting details.

## Configuring the Output Voltage (V OUT )

The  device's  output  voltages  (V OUT )  can  be  adjusted between 0.8V to 24V through sets of feedback resistordividers (R6, R7) by the following formula:

<!-- formula-not-decoded -->

Please refer to the MAX17558 IC data sheet to select R6 resistor values and change compensation components, as well as output capacitors, for new output voltage settings.

## Soft-Start (SS\_)

The device offers an SS\_ pin used to adjust the soft-start time to limit inrush current during startup. An internal 5µA current source charges the capacitor C21 at the SS\_ pin, providing a linear ramping voltage for output voltage reference. The soft-start time of the output is calculated based on the following equation:

<!-- formula-not-decoded -->

The default soft-start time on the EV kit is approximately 2.4ms.

## Enable/Undervoltage-Lockout Level (EN\_)

The  device's  two  controllers  may  be  independently  shut down/enabled  using  the  EN1  and  EN2  pins.  The  EN\_ pin can be programmed at 1.25V (typ) to detect the input undervoltage-lockout at a desired input voltage to enable/ disable  the  corresponding  controller  with  50mV  (typ) hysteresis. Connect a resistor-divider to EN\_ from V IN  to GND to program the input undervoltage-lockout threshold to turn on/off the corresponding controller.

Evaluates: MAX17558

For normal operation, the device is enabled whenever the input voltage is greater than 4.5V and JU4 and JU5 are open. Set the voltage at which each controller turns on by placing a shunt across pins 1-2 on JU4 and JU5, and adjust the resistor-divider formed by R16, R17 for controller 1 and by R18, R19 for controller 2. Table 2 shows the EV kit's jumper settings for configuring the EN\_ pin.

Select R17 (R19) below 10K and calculate the R16 (R18) based on the following equation:

<!-- formula-not-decoded -->

Where V INUVLO  is the input voltage at which the controller is required to turn on.

## Mode Selection (SKIP)

The device's SKIP pin is used to select light-load operating mode among the PWM/DCM modes of operation. Table 3 shows the EV kit's jumper settings for configuring the desired light-load operating mode.

## Phase Shift Between Controllers

JU1  can  be  configured  to  switch  between  0°  and  180° phase-shift  of  the  device's  two  controllers.  Table  4 shows the jumper configurations to select the phase-shift between the two controllers.

## Current-Limit Threshold Selection (JU2)

The current-limit threshold of both of the device's controllers can be selected using the JU2. Table 5 shows the EV kit jumper settings for selecting the current-limit threshold.

Each  controller's  peak  current  limit  can  be  adjusted independently by changing the values of R1 and R2. Note that  changing R1 and R2 values affect the stability and current-sense signal across the current sense pins. Refer to the 'Current Sensing' section of the MAX17558 IC data sheet for calculating the current-sense resistor value.

## Switching Frequency

The  device's  switching  frequency  is  set  to  350kHz  by resistor R14. Replace R14 with another value to set the switching  frequency  between  100kHz  to  2200kHz.  Use the following equation to calculate R14 when reconfiguring the switching frequency:

<!-- formula-not-decoded -->

Where F SW is in kHz and R14 is in KΩ.

│

## MAX17558 Dual-Phase Evaluation Kit

When  reconfiguring  the  EV  kit's  switching  frequency, it  may  be  necessary  to  change  the  loop-compensation network's components to new values. Refer to the Loop Compensation section of the MAX17558 IC data sheet for computing new compensation component values.

## Table 1. Default Setting of MAX17558 EV kit

| JUMPER   | SHUNT POSITION   | FUNCTION                                                            |
|----------|------------------|---------------------------------------------------------------------|
| JU1      | Unconnected      | Configure controller 1 and controller 2 180° out-of-phase operation |
| JU2      | 1-2              | Select 75mV current-limit threshold                                 |
| JU3      | 1-2              | Select the PWM mode of operation                                    |
| JU4      | Unconnected      | Enable controller 1                                                 |
| JU5      | Unconnected      | Enable controller 2                                                 |

## Table 2. Enable Control (JU4, JU5)

| JUMPER   | SHUNT POSITION   | EN                                              | MAX17558 OUTPUT                                                     |
|----------|------------------|-------------------------------------------------|---------------------------------------------------------------------|
| JU4      | Not installed    | Unconnected                                     | Enabled                                                             |
| JU4      | 1-2              | Connected to the midpoint of input UVLO divider | Enabled, UVLO level is set by the resistor divider from VIN to GND. |
| JU4      | 2-3              | Connected to GND                                | Disabled                                                            |
| JU5      | Not installed    | Unconnected                                     | Enabled                                                             |
| JU5      | 1-2              | Connected to the midpoint of input UVLO divider | Enabled, UVLO level is set by the resistor divider from VIN to GND. |
| JU5      | 2-3              | Connected to GND                                | Disabled                                                            |

## Table 3. Mode Selection (JU3)

| SHUNT POSITION   | SKIP PIN                                    | LIGHT-LOAD OPERATING MODE   |
|------------------|---------------------------------------------|-----------------------------|
| 1-2              | Connected to VCCINT                         | PWM mode                    |
| 2-3              | Connected to VCCINT through a 100K resistor | DCM mode                    |

## Table 4. Phase-Shift Selection (JU1)

| SHUNT POSITION   | SEL_PH PIN          | PHASE-SHIFT   |
|------------------|---------------------|---------------|
| 1-2              | Connected to VCCINT | 0°            |
| Not installed    | Unconnected         | 180°          |

## Table 5. Peak Current-Limit Threshold Selection (JU2)

| SHUT POSITION   | ILIM Pin            | PEAK CURRENT LIMIT THRESHOLD   |
|-----------------|---------------------|--------------------------------|
| 1-2             | Connected to VCCINT | 75mV                           |
| Not installed   | Unconnected         | 50mV                           |
| 2-3             | Connected to GND    | 30mV                           |

│

Evaluates: MAX17558

## Power-Good Outputs

The  EV  kit  provides  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the PGOOD1 and PGOOD2 signals. The PGOOD signals are pulled-up to VCCINT by R21 and R20. PGOOD1 and PGOOD2 are high when V OUT  is within the 90%-110% range of their programmed output voltage. When V OUT  is outside of the 90%-110%  range  of  their  programmed  output  voltage, PGOOD1 and PGOOD are pulled low.

## MAX17558 Dual-Phase Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

PHASE MARGIN (°)

<!-- image -->

Evaluates: MAX17558

<!-- image -->

<!-- image -->

│

## MAX17558 Dual-Phase Evaluation Kit

## Component Suppliers

| SUPPLIER                        | WEBSITE                      |
|---------------------------------|------------------------------|
| Wurth Elektronik                | www.we-online.com            |
| Renesas Electronics             | am.renesas.com               |
| Murata Americas                 | www.murata.com               |
| Panasonic Electronic Components | www.panasonic.com/industrial |
| Vishay Dale                     | www.vishay.com               |
| TDK Corp.                       | www.tdk.com                  |
| Rubycon Corp.                   | www.rubycon.com              |
| TT Electronics/Welwyn           | www.welwyn-tt.com            |

Note: Indicate that you are using the MAX17558 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- MAX17558DP EV BOM
- MAX17558DP EV PCB Layout
- MAX17558DP EV Schematic

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17558DPEVKIT# | EV kit |

#Denotes RoHS compliant.

Evaluates: MAX17558

│

## MAX17558 Dual-Phase

## Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,ntegrated reserYes the right to change the circuitr\ and specifications Zithout notice at an\ tiPe.

│

Evaluates: MAX17558

EMK107B7105KA

| Designation        |   Qty | Description                                                                                                              |
|--------------------|-------|--------------------------------------------------------------------------------------------------------------------------|
| C1                 |     1 | 150uF,80V Panasonic Electronic EEV-FK1K151Q                                                                              |
| C2-C9,             |     8 | CAP CER 4.7UF 80V 10% X7R 1210 Murata GRM32ER71K475ME14                                                                  |
| C10, C11, C14, C15 |     4 | 180uF,6.3V RUBYCON 6SW180M                                                                                               |
| C12, C13, C16, C17 |     4 | 10uF,10V,X7R,1210,10% Murata GRM32DR71A106KA01                                                                           |
| C18                |     1 | 1uF,100V,X7R,0805,10% TDK C2012X7S2A105K125                                                                              |
| C19, C31, C32      |     3 | CAP CER 1UF 16V 10% X7R 0603 KEMET C0603C105K4RAC /MURATA GRM188R71C105KA12/TDK C1608X7R1C105K/TAIYO YUDEN EMK107B7105KA |
| C20                |     1 | 10uF,10V,X7R,0805,10% Murata GRM188R71C153KA01                                                                           |
| C21                |     1 | 0.015uF,10V(16V),10%,X7R, 0603 Murata GRM188R71C153KA01                                                                  |
| C22                |     1 | 0.012uF,10V(16V),10%,X7R, 0603 Murata GRM188R71C123KA01                                                                  |
| C23                |     1 | 120pF,50V,COG,10%,0603 KEMET C0603C121K5GAC                                                                              |
| C24-C27            |     4 | 1nF,16V,X7R,0603,10% Murata GRM188R71C102KA01                                                                            |
| C28                |     1 | 1uF,100V,X7R,1206,10% MURATA GRM31CR72A105KA01L/TDK C3216X7R2A105K160                                                    |
| C29                |     1 | 0.22uF,25V,X7R,0603,10% KEMET C0603C224K3RAC/ MURATA GRM188R71E224KA88/                                                  |
| C30                |     1 | 10UF,10V,X7R,10%,1206 Murata GRM31CR71A106KA01L                                                                          |
| R1,R2              |     2 | 5mΩ, 1.5W,1%,2010 TT Electronics LRMAT2010-R005F                                                                         |
| R3, R5, R10,R11    |     4 | 0Ω ±1% resistor (0603)                                                                                                   |
| R6,R15             |     2 | 100KΩ ±1% resistor (0603)                                                                                                |

| R7                                                                            |   1 | 32.4KΩ ±1% resistor (0603)                                                                            |
|-------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------------------------------|
| R8                                                                            |   1 | 8.06K Ω ±1% resistor (0603)                                                                           |
| R9,R12                                                                        |   2 | 1Ω ±1% resistor (0603)                                                                                |
| R13, R22, R24, R29, R31, R32                                                  |   6 | 0Ω ±1% resistor (0603)                                                                                |
| R14                                                                           |   1 | 53.6KΩ ±1% resistor (0603)                                                                            |
| R20,R21                                                                       |   2 | 10KΩ ±1% resistor (0603)                                                                              |
| R25                                                                           |   1 | 69.8KΩ ±1% resistor (0603)                                                                            |
| R26                                                                           |   1 | 22.1Ω ±1% resistor (0603)                                                                             |
| R27                                                                           |   1 | 324KΩ ±1% resistor (0603)                                                                             |
| R28                                                                           |   1 | 49.9KΩ ±1% resistor (0603)                                                                            |
| R33                                                                           |   1 | 2.2Ω ±1% resistor (0603)                                                                              |
| L1,L2                                                                         |   2 | 2.2μH, 11.5A Inductor , Wurth Electronics 7447709002                                                  |
| L3                                                                            |   1 | 100μH, 0.19A Inductor , COIL CRAFT LPS3015-104MR                                                      |
| Q1, Q3, Q5, Q7                                                                |   4 | 60V, 25A N-Channel MOSFET (LFPAK) Renesas RJK0651DPB-00#J5                                            |
| Q2, Q4, Q6, Q8                                                                |   4 | 60V, 45A MOSFET (LFPAK) Renesas RJK0653DPB-00#J5                                                      |
| D1,D2                                                                         |   2 | 100V Schottky Diode (POWERDI 123) Diodes Incorporated DFLS 1100-7                                     |
| U1                                                                            |   1 | Wide 4.5V to 60V Input, Dual Output, Step-Down DC-DC Controller (32 TQFN-EP) Maxim                    |
| U2                                                                            |   1 | ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH 22uA NO-LOAD SUPPLY CURRENT; |
| EN1, EN2, GND, VIN, PGND, VOUT, PGND3, PGOOD1, PGOOD2, TRACK1, TRACK2, VCCINT |  12 | 20G tinned copper Bus wire formed into 'U' shaped loops (0.25' off the PC board)                      |
| JU1                                                                           |   1 | 2-pin header ( 0.1' pitch)                                                                            |
| JU2, JU3,JU4,JU5                                                              |   4 | 3-pin header ( 0.1' pitch) Sullins PREC003SAAN-RC                                                     |
| VIN,PGND,VOUT1,PGND,VOUT2,PGND                                                |   6 | Non -Insulate Jack Keystone Electronics 575-4                                                         |
| C33, C34                                                                      |   2 | OPEN                                                                                                  |
| R4, R16-R19, R23, R30                                                         |   7 | OPEN                                                                                                  |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

GND