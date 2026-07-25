<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17410 evaluation kit (EV kit) demonstrates the high-power, dynamically adjustable, multiphase IMVP-6+ notebook CPU application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage CPU core VCC rail. The MAX17410 EV kit meets the Intel mobile IMVP-6+ CPU's transient voltage specification, powergood signaling, voltage regulator thermal monitoring ( VRHOT ),  and  power monitor output (PMON). The MAX17410 EV kit consists of the MAX17410 2-phase interleaved Quick-PWM™ step-down controller. The MAX17410 EV kit includes active voltage positioning with  adjustable gain, reducing power dissipation, and bulk output capacitance requirements. A slew-rate controller allows controlled transitions between VID codes, controlled soft-start  and  shutdown, and controlled exit suspend voltage. Precision slew-rate control provides 'just-in-time' arrival at the new DAC setting, minimizing surge currents to and from the battery.

Dedicated system inputs ( PSI , DPRSTP , and DPRSLPVR) dynamically select the operating mode and number of active phases, optimizing the overall efficiency during the CPU's active and sleep states.

The MAX17410 includes latched output undervoltagefault,  overvoltage-fault,  and  thermal-overload protection.  It  also  includes  a  voltage  regulator  power-good output (PWRGD), a clock enable output ( CLKEN ),  a power monitor output (PMON), a phase-good output (PHASEGD), and a system power-good input (PGDN).

This fully assembled and tested circuit board provides a digitally adjustable 0 to 1.5000V output voltage (7-bit on-board DAC) from a 7V to 24V battery input range. Each phase delivers up to 19A output current for a total of  38A. The MAX17410 EV kit operates at 300kHz switching frequency (per phase) and has superior lineand load-transient response.

| DESIGNATION                                                                                              |   QTY | DESCRIPTION   |
|----------------------------------------------------------------------------------------------------------|-------|---------------|
| CLKEN , DPRSLPVR, GND_SENSE, PGDIN, PHASEGD, PMON, PSI , PWRGD, VID_VCC, VOUT_SENSE, VRHOT , VR_ON, V3P3 |    13 | Test points   |

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Dual-Phase, Fast-Response Interleaved, QuickPWM
- ♦ Intel IMVP-6+ Code-Set Compliant
- ♦ Dynamic Phase Selection Optimizes Active/Sleep Efficiency
- ♦ Transient Phase Overlap Reduces Output Capacitance
- ♦ Transient-Overshoot Suppression Feature
- ♦ Active Voltage Positioning with Adjustable Gain
- ♦ High Speed, Accuracy, and Efficiency
- ♦ Low Bulk Output Capacitor Count
- ♦ 7V to 24V Input-Voltage Range
- ♦ 0 to 1.5000V Output-Voltage Range (7-Bit DAC)
- ♦ 38A Load-Current Capability (19A per Phase)
- ♦ Accurate Current Balance and Current Limit
- ♦ 300kHz Switching Frequency (per Phase)
- ♦ Power-Good (PWRGD) and Phase-Good (PHASEGD) Outputs and Indicators
- ♦ Clock Enable ( CLKEN ) and Thermal-Fault ( VRHOT ) Outputs and Indicators
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17410EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 10µF ±20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM |
| C5            |     0 | Not installed, polymer capacitor (D case)                                                                |

## MAX17410 Evaluation Kit

## Component List (continued)

| DESIGNATION                                          |   QTY | DESCRIPTION                                                                                                               |
|------------------------------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| L1, L2                                               |     2 | 0.36µH, 36A, 0.82m Ω power inductors Panasonic ETQP4LR36ZFC NEC TOKIN MPC1055LR36 TOKO FDUE1040D-R36M                     |
| N1, N2                                               |     2 | n-channel MOSFETs (PowerPAK 8 SO) Fairchild FDS6298 (8 SO) Vishay (Siliconix) SI4386DY                                    |
| N3-N6                                                |     4 | n-channel MOSFETs (PowerPAK 8 SO) Fairchild FDS8670 (8 SO) Vishay (Siliconix) SI4626ADY                                   |
| R1, R15, R16, R43, R44                               |     5 | 10 Ω ±5% resistors (0603)                                                                                                 |
| R2                                                   |     1 | 61.9k Ω 1% resistor (0603)                                                                                                |
| R3, R19                                              |     2 | 10k Ω ±1% resistors (0603)                                                                                                |
| R4                                                   |     1 | 4.02k Ω ±1% resistor (0603)                                                                                               |
| R5, R6, R10                                          |     3 | 0 Ω resistors (0603)                                                                                                      |
| R7, R11                                              |     2 | 3.32k Ω ±1% resistors (0603)                                                                                              |
| R8, R10, R12, R18, R20, R33, R34, R35, R45, R48, R49 |     0 | Not installed, resistors (0603) R8, R10, R12, R18, R20, R33, R45, R48, and R49 are open; R34 and R35 are short (PC trace) |
| R9, R30                                              |     2 | 1 Ω ±1% resistors (0603)                                                                                                  |
| R13, R31                                             |     0 | Not installed, resistors (0805)                                                                                           |
| R14                                                  |     1 | 10k Ω ±1% NTC thermistor, β = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F                                        |
| R17                                                  |     1 | 1.5k Ω ±1% resistor (0603)                                                                                                |
| R21-R24                                              |     4 | 1k Ω ±5% resistors (0603)                                                                                                 |
| R25                                                  |     1 | 4.99k Ω ±1% resistor (0603)                                                                                               |
| R26                                                  |     1 | 100k Ω ±5% NTC thermistor, β = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J (0402) or Panasonic ERT-J1VR104J      |

| DESIGNATION            |   QTY | DESCRIPTION                                                                                                      |
|------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| C6, C7, C8             |     3 | 330µF, 2V, 4.5M low-ESR polymer capacitors (D case) Panasonic EEFSX0D331E4 or NEC TOKIN PSGV0E337M4.5            |
| C9                     |     0 | Not installed, ceramic capacitor (0805)                                                                          |
| C10, C11               |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K Taiyo Yuden EMK107BJ683MA Murata GRM188R61C105K   |
| C12, C17, C20, C21     |     4 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K                        |
| C13, C14               |     2 | 0.22µF ±20%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT     |
| C15, C18, C27          |     3 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K or equivalent         |
| C16                    |     1 | 0.47µF ±20%, 10V X5R ceramic capacitor (0603) Murata GRM188R71C474M Taiyo Yuden LMK107BJ474MA TDK C1608X5R1A474M |
| C19, C22-C26, C28, C29 |     0 | Not installed, ceramic capacitors (0603)                                                                         |
| C30-C61                |    32 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT   |
| D1, D2                 |     0 | Not installed, Schottky diodes                                                                                   |
| D3-D6                  |     4 | LEDs, green clear SMD (0805)                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX17410 EV kit
- 7V to 24V, &gt; 100W power supply, battery, or notebook AC adapter
- 5V at 1A DC bias power supply
- Two loads capable of sinking 19A each
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope

## MAX17410 Evaluation Kit

## Component List (continued)

| DESIGNATION                 |   QTY | DESCRIPTION                       |
|-----------------------------|-------|-----------------------------------|
| R27, R28, R29, R32, R36-R42 |    11 | 100k Ω ±5% resistors (0603)       |
| R46, R47                    |     2 | 2k Ω ±1% resistors (0603)         |
| SW1                         |     1 | 7-position low-profile DIP switch |
| SW2                         |     1 | 5-position low-profile DIP switch |

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U1            |     1 | 2-phase Quick-PWM VID controller (48 TQFN) Maxim MAX17410GTM+ |
| U2            |     1 | CPU socket MPGA479                                            |
| -             |     1 | PCB: MAX17410 Evaluation Kit+                                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17410 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Set SW1 (1, 14), SW1 (3, 12), SW1 (5, 10), SW1 (7, 8), and SW1 (7, 8) to the on positions. The output voltage is set for 0.9750V.
- 3) Turn on the battery power before turning on the 5V bias power.
- 4) Observe the 0.9750V output voltage with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.

## Detailed Description of Hardware

This 38A multiphase buck-regulator design is optimized for a 300kHz switching frequency (per phase) and output-voltage settings around 1V. At VOUT = 1V and VIN = 10V, the inductor ripple is approximately 45% (LIR = 0.45). The MAX17410 controller interleaves all  the  active  phases,  resulting  in  out-of-phase  operation that minimizes the input and output filtering requirements. The multiphase controller shares the current between two phases that operate 180° out-ofphase supplying up to 19A per phase. Table 1 lists the MAX17410 operating mode truth table function.

## Procedure

The MAX17410 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify that all positions of switch SW2 are off. The DAC code settings (D6-D0) are set by switch SW1.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

## Setting the Output Voltage

The MAX17410 has an internal digital-to-analog converter (DAC) that programs the output voltage. The output voltage can be digitally set from 0 to 1.5000V (Table 2) from the D0-D6 pins. There are two different ways of setting the output voltage:

- 1) Drive the external VID0-VID6 inputs (all SW1 positions are off). The output voltage is set by driving VID0-VID6 with open-drain drivers (pullup resistors are included on the board) or 3V/5V CMOS output logic levels.
- 2) Switch SW1. When SW1 positions are off, the MAX17410's D0-D6 inputs are at logic 1 (connected to VDD). When SW1 positions are on, D0-D6 inputs are at logic 0 (connected to GND). The output voltage can be changed during operation by activating SW1 on and off. As shipped, the EV kit is configured with SW1 positions set for 0.9750V output (Table 2). Refer to the MAX17410 IC data sheet for more information.

## Table 1. MAX17410 Operating Mode Truth Table Functions

| INPUTS           | INPUTS            | INPUTS              | INPUTS         | PHASE OPERATION*                                |                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------|-------------------|---------------------|----------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW2 (1, 10) | DPRSTP SW2 (5, 6) | DPRSLPVR SW2 (2, 9) | PSI SW2 (3, 8) | PHASE OPERATION*                                | OPERATING MODE                                                                                                                                                                                                                                                                                                                                                                   |
| GND              | X                 | X                   | X              | Disabled                                        | Low-Power Shutdown Mode. DL1 and DL2 are forced low and the controller is disabled. The supply current drops to 1µA (max).                                                                                                                                                                                                                                                       |
| Rising           | X                 | X                   | X              | Multiphase Forced-PWM 1/8 R TIME Slew Rate      | Startup/Boot. When SHDN is pulled high, the MAX17410 begins the startup sequence. Once the REF is above 1.84V, the controller enables the PWM controller and ramps the output voltage up to the boot voltage.                                                                                                                                                                    |
| High             | X                 | Low                 | High           | Multiphase Forced-PWM Nominal R TIME Slew Rate  | Full Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2).                                                                                                                                                                                                                                                                              |
| High             | X                 | Low                 | Low            | 1-Phase Forced-PWM Nominal R TIME Slew Rate     | Intermediate Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When PSI is pulled low, the MAX17410 immediately disables phase 2. DH2 and DL2 are pulled low.                                                                                                                                                                       |
| High             | Low               | High                | X              | 1-Phase Pulse Skipping Nominal R TIME Slew Rate | Deeper Sleep Mode. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When DPRSLPVR is pulled high, the MAX17410 immediately enters 1-phase pulse-skipping operation allowing automatic PWM/PFM switchover under light loads. The PWRGD and CLKEN upper thresholds are blanked. DH2 and DL2 are pulled low.                                 |
| High             | High              | High                | X              | 1-Phase Pulse Skipping 1/4 R TIME Slew Rate     | Deeper Sleep Slow Exit Mode. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When DPRSTP is pulled high while DPRSLPVR is already high, the MAX17410 remains in 1- phase pulse-skipping operation allowing automatic PWM/PFM switchover under light loads. The PWRGD and CLKEN upper thresholds are blanked. DH2 and DL2 are pulled low. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

Table 1. MAX17410 Operating Mode Truth Table Functions (continued)

| INPUTS           | INPUTS            | INPUTS              | INPUTS         | PHASE                                      |                                                                                                                                                                                                                                                                                           |
|------------------|-------------------|---------------------|----------------|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW2 (1, 10) | DPRSTP SW2 (5, 6) | DPRSLPVR SW2 (2, 9) | PSI SW2 (3, 8) | OPERATION*                                 | OPERATING MODE                                                                                                                                                                                                                                                                            |
| Falling          | X                 | X                   | X              | Multiphase Forced-PWM 1/8 R TIME Slew Rate | Shutdown. When SHDN is pulled low, the MAX17410 immediately pulls PWRGD and PHASEGD low, CLKEN becomes high impedance, all enabled phases are activated, and the output voltage is ramped down to ground. Once the output reaches 0V, the controller enters the low-power shutdown state. |
| High             | X                 | X                   | X              | Disabled                                   | Fault Mode. The fault latch has been set by the MAX17410 UVP or thermal-shutdown protection, or by the OVP protection. The controller remains in FAULT mode until VCC power is cycled or SHDN toggled.                                                                                    |

Table 2. MAX17410 IMVP-6+ Output-Voltage VID DAC Codes

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |   D6 |   D5 |   D4 D3 |   D2 |   D1 |   D0 |    |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|------|----------------------|------|------|---------|------|------|------|----|----------------------|
|    0 |    0 |    0 |    0 |    0 |    0 |    0 |               1.5000 |    1 |    0 |       0 |    0 |    0 |    0 |  0 |               0.7000 |
|    0 |    0 |    0 |    0 |    0 |    0 |    1 |               1.4875 |    1 |    0 |       0 |    0 |    0 |    0 |  1 |               0.6875 |
|    0 |    0 |    0 |    0 |    0 |    1 |    0 |               1.4750 |    1 |    0 |       0 |    0 |    0 |    1 |  0 |               0.6750 |
|    0 |    0 |    0 |    0 |    0 |    1 |    1 |               1.4625 |    1 |    0 |       0 |    0 |    0 |    1 |  1 |               0.6625 |
|    0 |    0 |    0 |    0 |    1 |    0 |    0 |               1.4500 |    1 |    0 |       0 |    0 |    1 |    0 |  0 |               0.6500 |
|    0 |    0 |    0 |    0 |    1 |    0 |    1 |               1.4375 |    1 |    0 |       0 |    0 |    1 |    0 |  1 |               0.6375 |
|    0 |    0 |    0 |    0 |    1 |    1 |    0 |               1.4250 |    1 |    0 |       0 |    0 |    1 |    1 |  0 |               0.6250 |
|    0 |    0 |    0 |    0 |    1 |    1 |    1 |               1.4125 |    1 |    0 |       0 |    0 |    1 |    1 |  1 |               0.6125 |
|    0 |    0 |    0 |    1 |    0 |    0 |    0 |               1.4000 |    1 |    0 |       0 |    1 |    0 |    0 |  0 |               0.6000 |
|    0 |    0 |    0 |    1 |    0 |    0 |    1 |               1.3875 |    1 |    0 |       0 |    1 |    0 |    0 |  1 |               0.5875 |
|    0 |    0 |    0 |    1 |    0 |    1 |    0 |               1.3750 |    1 |    0 |       0 |    1 |    0 |    1 |  0 |               0.5750 |
|    0 |    0 |    0 |    1 |    0 |    1 |    1 |               1.3625 |    1 |    0 |       0 |    1 |    0 |    1 |  1 |               0.5625 |
|    0 |    0 |    0 |    1 |    1 |    0 |    0 |               1.3500 |    1 |    0 |       0 |    1 |    1 |    0 |  0 |               0.5500 |
|    0 |    0 |    0 |    1 |    1 |    0 |    1 |               1.3375 |    1 |    0 |       0 |    1 |    1 |    0 |  1 |               0.5375 |
|    0 |    0 |    0 |    1 |    1 |    1 |    0 |               1.3250 |    1 |    0 |       0 |    1 |    1 |    1 |  0 |               0.5250 |
|    0 |    0 |    0 |    1 |    1 |    1 |    1 |               1.3125 |    1 |    0 |       0 |    1 |    1 |    1 |  1 |               0.5125 |
|    0 |    0 |    1 |    0 |    0 |    0 |    0 |               1.3000 |    1 |    0 |       1 |    0 |    0 |    0 |  0 |               0.5000 |
|    0 |    0 |    1 |    0 |    0 |    0 |    1 |               1.2875 |    1 |    0 |       1 |    0 |    0 |    0 |  1 |               0.4875 |
|    0 |    0 |    1 |    0 |    0 |    1 |    0 |               1.2750 |    1 |    0 |       1 |    0 |    0 |    1 |  0 |               0.4750 |
|    0 |    0 |    1 |    0 |    0 |    1 |    1 |               1.2625 |    1 |    0 |       1 |    0 |    0 |    1 |  1 |               0.4625 |
|    0 |    0 |    1 |    0 |    1 |    0 |    0 |               1.2500 |    1 |    0 |       1 |    0 |    1 |    0 |  0 |               0.4500 |
|    0 |    0 |    1 |    0 |    1 |    0 |    1 |               1.2375 |    1 |    0 |       1 |    0 |    1 |    0 |  1 |               0.4375 |
|    0 |    0 |    1 |    0 |    1 |    1 |    0 |               1.2250 |    1 |    0 |       1 |    0 |    1 |    1 |  0 |               0.4250 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX17410

## MAX17410 Evaluation Kit

## Table 2. MAX17410 IMVP-6+ Output-Voltage VID DAC Codes (continued)

| D6   | D5   | D4   | D3   | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   | D6   | D5   | D4   | D3   | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
| 0    | 0    | 1    | 0    | 1    | 1    | 1    | 1.2125               | 1    | 0    | 1    | 0    | 1    | 1    | 1    | 0.4125               |
| 0    | 0    | 1    | 1    | 0    | 0    | 0    | 1.2000               | 1    | 0    | 1    | 1    | 0    | 0    | 0    | 0.4000               |
| 0    | 0    | 1    | 1    | 0    | 0    | 1    | 1.1875               | 1    | 0    | 1    | 1    | 0    | 0    | 1    | 0.3875               |
| 0    | 0    | 1    | 1    | 0    | 1    | 0    | 1.1750               | 1    | 0    | 1    | 1    | 0    | 1    | 0    | 0.3750               |
| 0    | 0    | 1    | 1    | 0    | 1    | 1    | 1.1625               | 1    | 0    | 1    | 1    | 0    | 1    | 1    | 0.3625               |
| 0    | 0    | 1    | 1    | 1    | 0    | 0    | 1.1500               | 1    | 0    | 1    | 1    | 1    | 0    | 0    | 0.3500               |
| 0    | 0    | 1    | 1    | 1    | 0    | 1    | 1.1375               | 1    | 0    | 1    | 1    | 1    | 0    | 1    | 0.3375               |
| 0    | 0    | 1    | 1    | 1    | 1    | 0    | 1.1250               | 1    | 0    | 1    | 1    | 1    | 1    | 0    | 0.3250               |
| 0    | 0    | 1    | 1    | 1    | 1    | 1    | 1.1125               | 1    | 0    | 1    | 1    | 1    | 1    | 1    | 0.3125               |
| 0    | 1    | 0    | 0    | 0    | 0    | 0    | 1.1000               | 1    | 1    | 0    | 0    | 0    | 0    | 0    | 0.3000               |
| 0    | 1    | 0    | 0    | 0    | 0    | 1    | 1.0875               | 1    | 1    | 0    | 0    | 0    | 0    | 1    | 0.2875               |
| 0    | 1    | 0    | 0    | 0    | 1    | 0    | 1.0750               | 1    | 1    | 0    | 0    | 0    | 1    | 0    | 0.2750               |
| 0    | 1    | 0    | 0    | 0    | 1    | 1    | 1.0625               | 1    | 1    | 0    | 0    | 0    | 1    | 1    | 0.2625               |
| 0    | 1    | 0    | 0    | 1    | 0    | 0    | 1.0500               | 1    | 1    | 0    | 0    | 1    | 0    | 0    | 0.2500               |
| 0    | 1    | 0    | 0    | 1    | 0    | 1    | 1.0375               | 1    | 1    | 0    | 0    | 1    | 0    | 1    | 0.2375               |
| 0    | 1    | 0    | 0    | 1    | 1    | 0    | 1.0250               | 1    | 1    | 0    | 0    | 1    | 1    | 0    | 0.2250               |
| 0    | 1    | 0    | 0    | 1    | 1    | 1    | 1.0125               | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 0.2125               |
| 0    | 1    | 0    | 1    | 0    | 0    | 0    | 1.0000               | 1    | 1    | 0    | 1    | 0    | 0    | 0    | 0.2000               |
| 0    | 1    | 0    | 1    | 0    | 0    | 1    | 0.9875               | 1    | 1    | 0    | 1    | 0    | 0    | 1    | 0.1875               |
| 0    | 1    | 0    | 1    | 0    | 1    | 0    | 0.9750               | 1    | 1    | 0    | 1    | 0    | 1    | 0    | 0.1750               |
| 0    | 1    | 0    | 1    | 0    | 1    | 1    | 0.9625               | 1    | 1    | 0    | 1    | 0    | 1    | 1    | 0.1625               |
| 0    | 1    | 0    | 1    | 1    | 0    | 0    | 0.9500               | 1    | 1    | 0    | 1    | 1    | 0    | 0    | 0.1500               |
| 0    | 1    | 0    | 1    | 1    | 0    | 1    | 0.9375               | 1    | 1    | 0    | 1    | 1    | 0    | 1    | 0.1375               |
| 0    | 1    | 0    | 1    | 1    | 1    | 0    | 0.9250               | 1    | 1    | 0    | 1    | 1    | 1    | 0    | 0.1250               |
| 0    | 1    | 0    | 1    | 1    | 1    | 1    | 0.9125               | 1    | 1    | 0    | 1    | 1    | 1    | 1    | 0.1125               |
| 0    | 1    | 1    | 0    | 0    | 0    | 0    | 0.9000               | 1    | 1    | 1    | 0    | 0    | 0    | 0    | 0.1000               |
| 0    | 1    | 1    | 0    | 0    | 0    | 1    | 0.8875               | 1    | 1    | 1    | 0    | 0    | 0    | 1    | 0.0875               |
| 0    | 1    | 1    | 0    | 0    | 1    | 0    | 0.8750               | 1    | 1    | 1    | 0    | 0    | 1    | 0    | 0.0750               |
| 0    | 1    | 1    | 0    | 0    | 1    | 1    | 0.8625               | 1    | 1    | 1    | 0    | 0    | 1    | 1    | 0.0625               |
| 0    | 1    | 1    | 0    | 1    | 0    | 0    | 0.8500               | 1    | 1    | 1    | 0    | 1    | 0    | 0    | 0.0500               |
| 0    | 1    | 1    | 0    | 1    | 0    | 1    | 0.8375               | 1    | 1    | 1    | 0    | 1    | 0    | 1    | 0.0375               |
| 0    | 1    | 1    | 0    | 1    | 1    | 0    | 0.8250               | 1    | 1    | 1    | 0    | 1    | 1    | 0    | 0.0250               |
| 0    | 1    | 1    | 0    | 1    | 1    | 1    | 0.8125               | 1    | 1    | 1    | 0    | 1    | 1    | 1    | 0.0125               |
| 0    | 1    | 1    | 1    | 0    | 0    | 0    | 0.8000               | 1    | 1    | 1    | 1    | 0    | 0    | 0    | 0                    |
| 0    | 1    | 1    | 1    | 0    | 0    | 1    | 0.7875               | 1    | 1    | 1    | 1    | 0    | 0    | 1    | 0                    |
| 0    | 1    | 1    | 1    | 0    | 1    | 0    | 0.7750               | 1    | 1    | 1    | 1    | 0    | 1    | 0    | 0                    |
| 0    | 1    | 1    | 1    | 0 1  | 1 0  | 1    | 0.7625               | 1    | 1    | 1    | 1    | 1    | 1    | 1    | 0                    |
| 0    | 1    | 1    | 1    |      |      | 0    | 0.7500               | 1    | 1    | 1    | 1    | 0    | 0    | 0    | 0                    |
| 0    | 1    | 1    | 1    | 1    | 0    | 1    | 0.7375               | 1    | 1 1  | 1    | 1    | 1    | 0 1  | 1 0  | 0 0                  |
| 0 0  | 1 1  | 1 1  | 1 1  | 1 1  | 1 1  | 0 1  | 0.7250 0.7125        | 1 1  | 1    | 1 1  | 1 1  | 1 1  | 1    | 1    | 0                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

## Reduced Power-Dissipation Voltage Positioning

Table 3. Shutdown Mode (SHDN)

The MAX17410 includes a transconductance amplifier for  adding gain to the voltage-positioning sense path. The amplifier's input is generated by summing the current-sense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's  output  connects to the voltage-positioned feedback input (FB), so the resistance between FB and VPS (R4) determines the voltage-positioning gain. Resistor R4 (4.75k Ω ) provides a -2.1mV/A voltage-positioning slope at the output when all phases are active. Remote output and ground sensing eliminate any additional PCB voltage drops.

## Dynamic Output-Voltage Transition Experiment

This MAX17410 EV kit is set to transition the output voltage at 12.5mV/µs. The speed of the transition is altered by scaling resistors R2 and R3.

During the voltage transition, watch the inductor current by looking at the current-sense inputs with a differential scope probe. Observe the low, well-controlled inductor current that accompanies the voltage transition. Slew-rate control during shutdown and startup results in well-controlled currents in to and out of the battery (input source).

There are two methods to create an output-voltage transition.  Select D0-D6 (SW1). Then either manually change the SW1 settings to a new VID code setting (Table 2), or disable all SW1 settings and drive the VID0-VID6 PCB test points externally to the desired code settings.

## Switch SW2 Settings

## Shutdown SW2 (1, 10)

When SHDN goes  low  (SW2  (1,  10)  =  on),  the MAX17410 enters the low-power shutdown mode. PWRGD is pulled low immediately, and the output voltage ramps down at 1/8 the slew rate set by R2 and R3 (71.9k Ω ). When the controller reaches the 0V target, the drivers are disabled (DL1 and DL2 driven high), the reference is turned off, and the IC supply currents drop to 1µA (max).

When  a  fault  condition  activates  the  shutdown sequence (output undervoltage lockout or thermal shutdown), the protection circuitry sets the fault latch to prevent the controller from restarting. To clear the fault latch and reactivate the MAX17410, toggle SHDN or cycle VDD power. Table 3 shows the shutdown mode (SHDN).

<!-- image -->

| SW2 (1, 10)   | SHDN PIN         | MAX17410 OUTPUT                                                   |
|---------------|------------------|-------------------------------------------------------------------|
| Off           | Connected to VDD | Output enabled-V OUT is selected by VID DAC code (D0-D6) settings |
| On            | Connected to GND | Shutdown mode, V OUT = 0V                                         |

## DPRSLPVR SW2 (2, 9), PSI SW2 (3, 8)

DPRSLPVR and PSI together determine the operating mode, as shown in Table 4. The MAX17410 will be forced into full-phase PWM mode during startup, while in  boot mode, during the transition from boot mode to VID mode, and during shutdown.

## DPRSTP SW2 (5,6)

The DPRSTP logic signal is usually the logical complement of the DPRSLPVR signal. However, there is a special  condition when both DPRSTP and DPRSLPVR could temporarily be simultaneously high. If this happens, the slew rate reduces to 1/4 of the normal (RTIMEbased) slew rate for the duration of this condition. The slew rate returns to normal when this condition is exited. Note: Only DPRSLPVR and PSI ( not DPRSTP ) determine the mode of operation (PWM vs. skip and the number of active phases). See Table 5.

Table 4. DPRSLPVR, PSI

| DPRSLPVR SW2 (2, 9)   | PSI SW2 (3, 8)   | POWER LEVEL      | OPERATING MODE                                          |
|-----------------------|------------------|------------------|---------------------------------------------------------|
| On (VDD)              | On (GND)         | Very low current | 1-phase pulse- skipping mode                            |
| On (VDD)              | Off (VDD)        | Low current (3A) | 1-phase pulse- skipping mode                            |
| Off (GND)             | On (GND)         | Intermediate     | 1-phase forced- PWM mode                                |
| Off (GND)             | Off (VDD)        | Maximum          | Normal operation-all phases are active, forced-PWM mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

## Table 5. DPRSLPVR, DPRSTP

| DPRSLPVR SW2 (2,11)   | DPRSTP SW2 (5,6)   | FUNCTIONALITY                                                                      |
|-----------------------|--------------------|------------------------------------------------------------------------------------|
| Off (GND)             | On (GND)           | Normal slew rate, 1- or 2-phase forced PWM mode (DPRSLPVR low → DPRSTP is ignored) |
| Off (GND)             | Off (VDD)          | Normal slew rate, 1- or 2-phase forced PWM mode (DPRSLPVR low → DPRSTP is ignored) |
| On (VDD)              | On (GND)           | Normal slew rate, 1-phase automatic pulse-skipping mode                            |
| On (VDD)              | Off (VDD)          | Slew rate reduced to 1/4 of normal, 1-phase automatic pulse- skipping mode         |

## PGDIN, SW2 (4, 7)

PGDIN indicates the power status of other system rails and is used for power-supply sequencing. After powerup to the boot voltage, the output voltage remains at VBOOT, CLKEN remains high, and PWRGD remains low as long as the PGDIN stays low. When PGDIN is pulled high, the output transitions to selected VID voltage, and CLKEN is  pulled  low.  If  the  system  pulls  PGDIN  low during normal operation, the MAX17410 immediately drives CLKEN high, pulls PWRGD low, and slews the output to the boot voltage (using 2-phase pulse-skipping mode). The controller remains at the boot voltage until  PGDIN goes high again, SHDN is  toggled, or the VDD is cycled. See Table 6.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 6. PGDIN

| SW2 (4, 7)   | PGDIN PIN        | MAX17410 OUTPUT                                                              |
|--------------|------------------|------------------------------------------------------------------------------|
| Off          | Connected to GND | VOUT remains at the boot voltage, CLKEN remains high, and PWRGD remains low. |
| On           | Connected to VDD | VOUT transitions to selected VID voltage and CLKEN is pulled low.            |

## MAX17410 Evaluation Kit

Figure 1a. MAX17410 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 1b. MAX17410 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

<!-- image -->

Figure 2. MAX17410 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 3. MAX17410 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

<!-- image -->

Figure 4. MAX17410 EV Kit PCB Layout-Internal Layer 2 (VBATT/PGND Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 5. MAX17410 EV Kit PCB Layout-Internal Layer 3 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

<!-- image -->

Figure 6. MAX17410 EV Kit PCB Layout-Internal Layer 4 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 7. MAX17410 EV Kit PCB Layout-Internal Layer 5 (AGND/PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

<!-- image -->

Figure 8. MAX17410 EV Kit PCB Layout-Internal Layer 6 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 9. MAX17410 EV Kit PCB Layout-Internal Layer 7 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17410 Evaluation Kit

<!-- image -->

Figure 10. MAX17410 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17410 Evaluation Kit

Figure 11. MAX17410 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

20

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_