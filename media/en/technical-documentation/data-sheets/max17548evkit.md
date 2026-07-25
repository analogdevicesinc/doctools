<!-- lastmod 2022-08-02 -->
## MAX17548 Evaluation Kit

## General Description

The MAX17548 EV kit provides a proven design to evaluate the MAX17548 wide 4.5V to 42V input, dual-output, synchronous  step-down  DC-DC  controller.  The  EV  kit provides 5V/5A and 3.3V/10A at the outputs from a 6V to 42V input supply. The switching frequency of the EV kit is preset to 350kHz for optimal efficiency and component size. The EV kit features adjustable input undervoltagelockout and soft-start time, selectable PWM/DCM modes, 180°  out-of-phase/0°  in-phase  operation,  current-limit threshold, and independent open-drain PGOOD signals.

## Features

- 6V to 42V Input Range
- Output Rails: V OUT1 : 5V/5A, V OUT2 : 3.3V/10A
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

Evaluates: MAX17548

## Quick Start

## Required Equipment

- MAX17548 EV kit
- 4.5V to 42V, 15A DC power supply
- Loads capable of sinking 5A and 10A
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Ensure that the DC power supply is disabled. Set the power supply voltage to 24V.
- 2) Set one of the loads to 5A and the other to 10A. Disable the load in the case of an electronic load. Leave the load unconnected in the case of a resistor load and ensure that the resistor power rating is high enough to dissipate the output power.
- 3) Connect the positive terminal of the power supply to the VIN connector and the negative terminal of the power supply to PGND connector, which is nearest to VIN connector.
- 4) Connect one digital voltmeter across VOUT1 connector and the nearest PGND connector with the positive terminal of the DVM connected to VOUT1 connector.
- 5) Connect the other digital voltmeter across VOUT2 connector and the nearest PGND connector with the positive terminal of the DVM connected to VOUT2 connector.
- 6) Verify the shunts on jumpers, as described in Table 1, to select default settings of the EV kit.
- 7) Turn on the DC power supply.
- 8) Verify that the digital voltmeters display the expected voltages (5V±1% on VOUT1 and 3.3V±1% on VOUT2).
- 9) Enable the electronic load (connect the load in the case of resistor load).
- 10)  Verify that the voltmeters display the expected voltages (5V±1% on V OUT1  and 3.3V±1% on V OUT2 ).

<!-- image -->

## MAX17548 Evaluation Kit

## Detailed Description of Hardware

The  EV  kit  provides  a  proven  design  to  evaluate  the device. The EV kit provides 5V/5A and 3.3V/10A at the outputs from 6V to 42V input supply. The EV kit can also operate over the 4.5V to 42V range to provide only 3.3V output by connecting a shunt of JU4 at the 2-3 position to disable the 5V output. The EV kit is preset to operate at 350kHz for optimum efficiency and component size.

The EV kit provides set resistors R16, R17 and R18, R19 and jumpers JU4, JU5 to enable/disable the output at a desired input UVLO voltage. The DCM or PWM mode of operation can be selected using JU3. JU1 allows selection of 180°/0° phase-shift operation between the two controllers. JU2  allows  the  selection  of  three  different  current-limit thresholds for both controllers. Refer to Table 2 through Table 4 for additional jumper setting details.

## Configuring the Output Voltages (V OUT1 , V OUT2 )

The device's output voltages (V OUT1  and V OUT2 ) can be adjusted between 0.8V to 24V through sets of feedback resistor-dividers (R6, R7 and R26, R27) by the following formula:

<!-- formula-not-decoded -->

Please refer to the MAX17548 IC data sheet to select R6 resistor values and change compensation components, as well as output capacitors, for new output voltage settings.

## Soft-Start (SS\_)

The device offers an SS\_ pin used to adjust the soft-start time to limit inrush current during startup. Soft-start times are controlled by the values of C21 and C30 for V OUT1 and V OUT2 , respectively. An internal 5µA current source

## Table 1. Default Setting of MAX17548 EV kit

| JUMPER   | SHUNT POSITION   | FUNCTION                                                    |
|----------|------------------|-------------------------------------------------------------|
| JU1      | Unconnected      | Configure output 1 and output 2 180° out-of-phase operation |
| JU2      | 1-2              | Select 75mV current-limit threshold                         |
| JU3      | 1-2              | Select the PWM mode of operation                            |
| JU4      | Unconnected      | Enable control 1                                            |
| JU5      | Unconnected      | Enable control 2                                            |

│

Evaluates: MAX17548

charges the capacitor at the SS\_ pin, providing a linear ramping  voltage  for  output  voltage  reference.  The  softstart time of V OUT1  and V OUT2  are calculated based on the following equation:

<!-- formula-not-decoded -->

The default soft-start time on the EV kit is approximately 2.4ms.

## Enable/Undervoltage-Lockout Level (EN\_)

The  device's  two  controllers  may  be  independently  shut down/enabled  using  the  EN1  and  EN2  pins.  The  EN\_ pin can be programmed at 1.25V (typ) to detect the input undervoltage-lockout at a desired input voltage to enable/ disable  the  corresponding  controller  with  50mV  (typ) hysteresis. Connect a resistor-divider to EN\_ from V IN  to GND to program the input undervoltage-lockout threshold to turn on/off the corresponding controller.

For normal operation, the device is enabled whenever the input voltage is greater than 4.5V and JU4 and JU5 are open. Set the voltage at which each controller turns on by placing a shunt across pins 1-2 on JU4 and JU5, and adjust the resistor-divider formed by R16, R17 for controller 1 and by R18, R19 for controller 2. Table 2 shows the EV kit's jumper settings for configuring the EN\_ pin.

Select R17 (R19 for OUT2) below 10K and calculate the R16 (R18) based on the following equation:

<!-- formula-not-decoded -->

Where V INUVLO  is the input voltage at which the controller is required to turn on.

## MAX17548 Evaluation Kit

## Mode Selection (SKIP)

The device's SKIP pin is used to select light-load operating  mode  among  the  PWM/DCM  modes  of  operation. Table 3 shows the EV kit's jumper settings for configuring the desired light-load operating mode.

## Phase Shift Between Controllers

JU1  can  be  configured  to  switch  between  0°  and  180° phase-shift  of  the  device's  two  controllers.  Table  4 shows the jumper configurations to select the phase-shift between the two controllers.

## Table 2. Enable Control (JU4, JU5)

| JUMPER   | SHUNT POSITION   | EN                                              | MAX17548 OUTPUT                                                     |
|----------|------------------|-------------------------------------------------|---------------------------------------------------------------------|
| JU4      | Not installed    | Unconnected                                     | Enabled                                                             |
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

Evaluates: MAX17548

## Current-Limit Threshold Selection (JU2)

The current-limit threshold of both of the device's controllers can be selected using the JU2. Table 5 shows the EV kit jumper settings for selecting the current-limit threshold.

Each  controller's  peak  current  limit  can  be  adjusted independently by changing the values of R1 and R2. Note that  changing R1 and R2 values affect the stability and current-sense signal across the current sense pins. Refer to the 'Current Sensing' section of the MAX17548 IC data sheet for calculating the current-sense resistor value.

## MAX17548 Evaluation Kit

## Switching Frequency

The  device's  switching  frequency  is  set  to  350kHz  by resistor R14. Replace R14 with another value to set the switching  frequency  between  100kHz  to  2200kHz.  Use the following equation to calculate R14 when reconfiguring the switching frequency:

<!-- formula-not-decoded -->

Where F SW is in kHz and R14 is in KΩ.

When  reconfiguring  the  EV  kit's  switching  frequency, it  may  be  necessary  to  change  the  loop-compensation network's components to new values. Refer to the 'Loop Compensation' section in the MAX17548 IC data sheet for computing new compensation component values.

## Power-Good Outputs

The  EV  kit  provides  power-good  output  test  points (PGOOD1 and PGOOD2) to monitor the PGOOD1 and PGOOD2 signals. The PGOOD signals are pulled-up to VCCINT by R21 and R20. PGOOD1 and PGOOD2 are high when V OUT1  and V OUT2 , respectively, are within the 90%-110% range  of  their  programmed  output  voltages. When VOUT1 and VOUT2 are outside of the 90%-110%

Evaluates: MAX17548

range of their programmed output voltages, PGOOD1 and PGOOD are pulled low, respectively.

## Power Supply Tracking

The  EV  kit  is  set  up  for  independent  soft-start  without tracking. The EV kit outputs are also operated in tracking mode,  with  either  output  as  a  master  by  the  following modifications.

For OUT2 to track OUT1, follow the steps below:

- Replace R23 with a 0Ω resistor
- Replace R22 and C30 with a resistive divider such that the parallel combination of the divider resistors is less than 10kΩ. The ratios of the resistor-dividers should be identical to the ratios of R26, R27, R6, and R7 for the coincident tracking and ratiometric tracking, respectively.

For OUT1 to track OUT2, follow the steps below:

- Replace R30 with a 0Ω resistor
- Replace R29 and C21 with a resistive-divider such that the parallel combination of the divider resistors is less than 10kΩ. The ratios of the divider resistors should be identical to the ratios of R6, R7 and R26, R27 for the coincident tracking and ratiometric tracking, respectively.

│

## EV Kit Performance Report

<!-- image -->

<!-- image -->

STARTUP FROM ENABLE VIN = 24V, V OUT1 = 5V, I OUT1 = 5A, VOUT2 = 3.3V, I OUT2 = 10A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

<!-- image -->

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

Note: Indicate that you are using the MAX17548 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17548EVKIT# | EV kit |

#Denotes RoHS compliant.

GAIN (dB)

<!-- image -->

Evaluates: MAX17548

<!-- image -->

│

## MAX17548 EV Kit Bill of Materials

| DESIGNATION     |   QTY | DESCRIPTION                                                               |
|-----------------|-------|---------------------------------------------------------------------------|
| C1              |     1 | 150uF, 80V , Aluminum-Electrolytic Capacitor PANASONIC EEVFK1K151Q        |
| C2-C9           |     8 | 4.7uF ±20%, 80V X7R Ceramic Capacitor Murata GRM32ER71K475ME14#           |
| C10, C11        |     2 | 120uF, 6.3V , Electrolytic Capacitor PANASONIC EEFSX0J121E7               |
| C12,C13,C16,C17 |     4 | 10uF ±10%, 10V X7R Ceramic Capacitor(1210) Murata GRM32DR71A106KA01L      |
| C14, C15        |     2 | 180uF, 6.3V , Electrolytic Capacitor RUBYCON 6SW180M                      |
| C18             |     1 | 1uF ±10%, 100V X7S Ceramic Capacitor(0805) TDK Corporation C2012X7S2A105K |
| C19,C32         |     1 | 1uF ±10%, 16V X7R Ceramic Capacitor(0603) Murata GRM188R71A105KA61J       |
| C20             |     1 | 10uF ±10%, 10V X7R Ceramic Capacitor(0805) Murata GRM21BR71A106KE51L      |
| C21,C30         |     2 | 15nF ±10%, 16V X7R Ceramic Capacitor(0603) Murata GRM188R71C153KA01D      |
| C22,C28         |     2 | 12nF ±10%, 16V X7R Ceramic Capacitor(0603) Murata GRM188R71C123KA01D      |
| C23             |     1 | 68pF ±5%, 50V C0G Ceramic Capacitor(0603) Murata GRM1885C1H680J           |
| C24,C25,C26,C27 |     4 | 1nF ±10%, 16V X7R Ceramic Capacitor(0603) Murata GRM188R71C102KA01D       |
| C29             |     1 | 120pF ±5%, 50V C0G Ceramic Capacitor(0603) Murata GRM1885C1H121JA01D      |
| C31             |     1 | 0.47uF ±10%, 16V X7R Ceramic Capacitor(0603) Murata GRM188R71A474KA61D    |
| C33,C34         |     0 | Not Installed.                                                            |

## MAX17548 EV Kit Bill of Materials (continued)

|                                            |    | Ceramic Capacitor (0603)                                                              |
|--------------------------------------------|----|---------------------------------------------------------------------------------------|
| JU1                                        |  1 | 2-pin header ( 0.1' pitch)                                                            |
| JU2,JU3, JU4,JU5                           |  4 | 3-pin header ( 0.1' pitch)                                                            |
| L1                                         |  1 | 4.7 μH, 9.4A I nductor Coilcraft SER1360-472KL                                        |
| L2                                         |  1 | 2.2μH, 11 .5A Inductor Wurth Electronics 7447709002                                   |
| Q1,Q5,Q7                                   |  3 | 60V, 25A N-Channel MOSFET (LFPAK) Renesas RJK0651DPB                                  |
| Q2,Q8                                      |  2 | 60V, 45A MOSFET (LFPAK) Renesas RJK0653DPB                                            |
| Q3                                         |  0 | Not installed, N-Channel MOSFET (LFPAK) Renasas RJK0651DPB                            |
| Q4,Q6                                      |  0 | Not installed (LFPAK) Renasas RJK0653DPB                                              |
| D1,D2                                      |  2 | 100V Schottky Diode (POWERDI 123) Diodes Incorporated DFLS 1100-7                     |
| R1                                         |  1 | 9 mΩ ±1% 1Watt current sense resistor (2010) ROHM Semiconductor PMR50HZPFU9L00        |
| R2                                         |  1 | 5mΩ ±1% 1.5Watt current sense resistor (2010) TT Electronics/Welwyn LRMAT2010-R005FT4 |
| R3,R5,R9,R10,R11,R12,R13, R22,R24, R25,R29 | 11 | 0Ω ±1% resistor (0603                                                                 |
| R4                                         |  1 | 2.2Ω ±1% resistor (0603 )                                                             |
| R6                                         |  1 | 95.3KΩ ±1% resistor (0603 )                                                           |
| R7                                         |  1 | 18.7KΩ ±1% resistor (0603                                                             |
| R8                                         |  1 | 13.3 KΩ ±1% resistor (0603)                                                           |
| R14                                        |  1 | 53.6 KΩ ±1% resistor (0603)                                                           |
| R15,R26                                    |  2 | 100KΩ ±1% resistor (0603)                                                             |
| R20, R21                                   |  2 | 1 0KΩ ±1% resistor (0603)                                                             |

## MAX17548 EV Kit Bill of Materials (continued)

| R16, R17, R18, R19, R23, R30                                                    |   0 | Not installed, resistor (0603)                                                                      |
|---------------------------------------------------------------------------------|-----|-----------------------------------------------------------------------------------------------------|
| R27                                                                             |   1 | 32.4KΩ ±1% resistor (0603                                                                           |
| R28                                                                             |   1 | 12.1KΩ ±1% resistor (0603)                                                                          |
| U1                                                                              |   1 | Wide 4.5V to 42 V Input, Dual Output, Step-Down DC- DC Controller (32 TQFN-EP) Maxim MAX175 4 8ATJ+ |
| VIN,PGND,VOUT1,PGND,VOUT2,PGN D,EN1,EN2,GND,PGOOD1,PGOOD2, VCCINT,TRACK1,TRACK2 |  14 | 20G tinned copper Bus wire formed into 'U' shaped loops (0.25' off the PC board)                    |
| VIN,PGND,VOUT1,PGND,VOUT2,PGN D                                                 |   6 | Non -Insulate Jack Keystone Electronics 575-4                                                       |

## MAX17548 EV Kit Schematic

<!-- image -->

## MAX17548 EV Kit PCB Layouts

Figure 1. MAX17548 EV Kit Component Placement GuideComponent Top Side

<!-- image -->

Figure 3. MAX17548 EV Kit PCB Layout-Inner Layer 1

<!-- image -->

Figure 2. MAX17548 EV Kit PCB LayoutComponent Top Side

<!-- image -->

Figure 4. MAX17548 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

│

## MAX17548 EV Kit PCB Layouts (continued)

Figure 5. MAX17548 EV Kit Component Placement GuideSolder Bottom Side

<!-- image -->

Figure 6. MAX17548 EV Kit PCB LayoutComponent Bottom Side

<!-- image -->

│

## MAX17548 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP ,ntegrated reserves the right to change the circuitr\ and specifications without notice at an\ tiPe.

│

Evaluates: MAX17548