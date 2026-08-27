<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17082 Evaluation Kit

## General Description

The MAX17082 evaluation kit (EV kit) demonstrates the high-power, dynamically adjustable, multiphase IMVP-6.5 notebook CPU application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage CPU core VCC rail. The MAX17082 EV kit meets the Intel mobile IMVP-6.5 CPU's transient voltage specification, power-good signaling, voltage regulator thermal monitoring ( VRHOT ),  and power-good output (PWRGD). The MAX17082 kit consists of the MAX17082 2-phase interleaved Quick-PWM™ step-down controller. The MAX17082 kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. A slew-rate controller allows controlled transitions between VID codes, controlled soft-start and shutdown, and controlled exit suspend voltage. Precision slew-rate control provides 'just-in-time' arrival at the new DAC setting, minimizing surge currents to and from the battery.

Two dedicated system inputs ( PSI and DPRSLPVR) dynamically select the operating mode and number of active phases, optimizing the overall efficiency during the CPU's active and sleep states.

The MAX17082 includes latched output undervoltagefault  protection,  overvoltage-fault  protection,  and  thermal-overload protection. It also includes a voltage regulator  power-good (PWRGD) output, a clock enable ( CLKEN )  output, a current monitor (IMON) output, and a phase-good (PHASEGD) output.

This fully assembled and tested circuit board provides a digitally adjustable 0 to 1.5000V output voltage (7-bit on-board DAC) from a 7V to 24V battery input range. Each phase delivers up to 19A output current for a total of  38A.  The  EV  kit  operates  at  300kHz  switching  frequency (per phase) and has superior line- and loadtransient response.

The MAX17082 EV kit can also be used to evaluate the MAX17021, MAX17033, and MAX17034.

| DESIGNATION                                                                                      |   QTY | DESCRIPTION   |
|--------------------------------------------------------------------------------------------------|-------|---------------|
| CLKEN , DPRSLPVR, GND_SENSE, IMON, PGD_IN, PHASEGD, PSI , PWRGD, V3P3, VOUT_SENSE, VRHOT , VR_ON |    12 | Test points   |

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

Features

- ♦ Dual-Phase, Fast-Response Interleaved, Quick-PWM
- ♦ Intel IMVP-6.5 Code-Set Compliant (Calpella Socket Configuration)
- ♦ Dynamic Phase Selection Optimizes Active/Sleep Efficiency
- ♦ Transient Phase Overlap Reduces Output Capacitance
- ♦ Active Voltage Positioning with Adjustable Gain
- ♦ High Speed, Accuracy, and Efficiency
- ♦ Low-Bulk Output Capacitor Count
- ♦ 7V to 24V Input-Voltage Range
- ♦ 0 to 1.5000V Output-Voltage Range (7-Bit DAC)
- ♦ 38A Load-Current Capability (19A Each Phase)
- ♦ Accurate Current Balance and Current Limit
- ♦ 300kHz Switching Frequency (per Phase)
- ♦ Power-Good (PWRGD) and Phase-Good (PHASEGD) Outputs and Indicators
- ♦ Clock Enable ( CLKEN ) and Thermal Fault ( VRHOT ) Outputs and Indicators
- ♦ Current Monitor (IMON) Output
- ♦ Output Overvoltage and Undervoltage Fault Protections
- ♦ 40-Pin Thin QFN Package with Exposed Pad
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17082EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                    |
|---------------|-------|----------------------------------------------------------------------------------------------------------------|
| C1-C4         |     4 | 10µF ±20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M or AVX 12103D106M or Taiyo Yuden TMK325BJ106MM |
| C5            |     0 | Not installed, ceramic capacitor (D case)                                                                      |

## MAX17082 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                             |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| D1, D2        |     2 | 3A, 30V Schottky diodes Nihon EC31QS03L Central Semi CMSH3-40M                                                          |
| D3-D6         |     4 | LEDs, green clear SMD (0805)                                                                                            |
| JU1           |     0 | Not installed, 3-pin header                                                                                             |
| L1, L2        |     2 | 0.36µH, 20A, 1.2m Ω power inductors Panasonic ETQP4LR36ZFJ                                                              |
| N1, N2        |     2 | n-channel MOSFET (PowerPAK SO8) Fairchild FDS6298 (8 SO) Vishay (Siliconix) SI4386DY                                    |
| N3-N6         |     4 | n-channel MOSFET (PowerPAK SO8) Fairchild FDS8670 (8 SO) Vishay (Siliconix) SI4336DY                                    |
| N7            |     0 | Not installed, n-channel MOSFET (D-PAK)                                                                                 |
| R1, R15, R16  |     3 | 10 Ω ±5% resistors (0603)                                                                                               |
| R2            |     1 | 59k Ω ±1% resistor (0603)                                                                                               |
| R3            |     1 | 12.1k Ω ±1% resistor (0603)                                                                                             |
| R4            |     1 | 200k Ω ±1% resistor (0603)                                                                                              |
| R5, R6        |     2 | 0 Ω resistors (0603)                                                                                                    |
| R7, R11       |     2 | 1.21k Ω ±1% resistors (0603)                                                                                            |
| R8, R12       |     2 | 1.50k ±1% resistors (0603)                                                                                              |
| R9, R13       |     2 | Ω 20k Ω ±1% resistors (0603)                                                                                            |
| R10, R14      |     2 | 10k Ω ±1% NTC thermistors, ß = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F                                     |
| R17           |     1 | 2.74k Ω ±1% resistor (0603)                                                                                             |
| R18, R45      |     0 | Not installed, resistors (0603)                                                                                         |
| R19           |     1 | 51 Ω ±5% resistor (0603)                                                                                                |
| R20           |     0 | Not installed, 1W resistor (2512)                                                                                       |
| R21-R24, R30  |     5 | 1k Ω ±5% resistors (0603)                                                                                               |
| R25           |     1 | 13k Ω ±1% resistor (0603)                                                                                               |
| R26           |     1 | 100k Ω ±5% NTC thermistor, ß = 4250 (0603) Murata NCP18WF104J03RB or TDK NTCG163JF104J (0402) or Panasonic ERT-J1VR104J |

| DESIGNATION      |   QTY | DESCRIPTION                                                                                                              |
|------------------|-------|--------------------------------------------------------------------------------------------------------------------------|
| C6, C7, C8       |     3 | 330µF, 2V, 4.5m Ω low-ESR polymer capacitors (D case) Panasonic EEFSX0D331E4 or NEC TOKIN PSGV0E337M4.5                  |
| C9               |     0 | Not installed, ceramic capacitor (0805)                                                                                  |
| C10, C11         |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K or Taiyo Yuden EMK107BJ683MA or Murata GRM188R61C105K     |
| C12, C21-C27     |     0 | Not installed, ceramic capacitors (0603) C17, C18, C21-C26 are open; C27 is short (PC trace)                             |
| C13-C16          |     4 | 0.22µF ±20%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ224MA or TDK C1608X7R1C224M or AVX 06033D224KAT       |
| C17, C8, C19     |     3 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K or equivalent                 |
| C20              |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K Murata GRM188R71E104K                                    |
| C28, C29         |     2 | 0.068µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1E683K or Taiyo Yuden EMK107BJ683KA or Murata GRM188R71C683K |
| C30-C39, C60-C67 |    18 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG or AVX 08056D106MAT        |
| C40-C59          |    20 | 22µF, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

## Component List (continued)

| DESIGNATION                      |   QTY | DESCRIPTION                                      |
|----------------------------------|-------|--------------------------------------------------|
| R27, R28, R29, R31, R32, R36-R42 |    12 | 100k Ω ±5% resistors (0603)                      |
| R33                              |     1 | 6.98k Ω ±1% resistor (0603)                      |
| R34, R35                         |     0 | Not installed, resistors-short (PC trace) (0603) |
| R43, R44                         |     2 | 1 Ω ±5% resistors (0603)                         |
| R46, R47                         |     2 | 2 Ω ±5% resistors (0603)                         |

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| SW1           |     1 | 7-position low-profile DIP switch                                     |
| SW2           |     1 | 5-position low-profile DIP switch                                     |
| U1            |     1 | Dual-phase, Quick-PWM VID controller (40 TQFN-EP*) Maxim MAX17082GTL+ |
| U2            |     1 | CPU socket rPGA-989                                                   |
| -             |     1 | PCB: MAX17082 EVALUATION KIT+                                         |

## Procedure

The MAX17082 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Nihon Inter Electronics Corp.          | 847-843-7500 | www.niec.co.jp              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17082 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX17082 EV kit
- 7V to 24V, &gt;100W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 1A
- Two loads capable of sinking 25A each
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope
- 2) Set SW2 (4, 7) and SW2 (5, 6) to the on positions. The DAC code settings (D6-D0) are set by switch SW1. Set SW1 (1, 14), SW1 (3, 12), SW1 (5, 10) and SW1 (7, 8) to the on positions. The output voltage is set for 0.9750V.
- 3) Turn on the battery power before turning on the +5V bias power.
- 4) Observe the 0.9750V output voltage with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.

## Detailed Description of Hardware

This 38A multiphase buck-regulator design is optimized for a 300kHz switching frequency (per phase) and output-voltage settings around 1V. At VOUT = 1V and VIN = 12V, the inductor ripple is approximately 45% (LIR = 0.45). The MAX17082 controller interleaves all the active phases, resulting in out-of-phase operation that minimizes the input and output filtering requirements.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

The multiphase controller shares the current between two phases that operate 180 ° out-of-phase, supplying up to 19A per phase.

## Setting the Output Voltage

The MAX17082 has an internal digital-to-analog converter (DAC) that programs the output voltage. The output voltage can be digitally set from 0 to 1.5000V (Table 2) from the D0-D6 pins. There are two different ways of setting the output voltage:

- 1) Drive the external VID0-VID6 inputs (all SW1 positions are off). The output voltage is set by dri-
2. ving VID0-VID6 with open-drain drivers (pullup resistors are included on the board) or 3V/5V CMOS output logic levels.
- 2) Switch SW1. When SW1 positions are off, the MAX17082's D0-D6 inputs are at logic 1 (connected to VDD). When SW1 positions are on, D0-D6 inputs are at logic 0 (connected to GND). The output voltage can be changed during operation by activating SW1 on and off. As shipped, the EV kit is configured with SW1 positions set for 0.9750V output (Table 2). Refer to the MAX17082 IC data sheet for more information.

## Table 1. MAX17082 Operating Mode Truth Table

| INPUTS           | INPUTS          | INPUTS              | INPUTS         | PHASE OPERATION*                               |                                                                                                                                                                                                                                                                                                                                                                              |
|------------------|-----------------|---------------------|----------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW2 (1, 10) | SLOW SW2 (5, 6) | DPRSLPVR SW2 (2, 9) | PSI SW2 (3, 8) | PHASE OPERATION*                               | OPERATING MODE                                                                                                                                                                                                                                                                                                                                                               |
| GND              | X               | X                   | X              | Disabled                                       | Low-Power Shutdown Mode. DL1 and DL2 are forced low and the controller is disabled. The supply current drops to 1A (max).                                                                                                                                                                                                                                                    |
| Rising           | X               | X                   | X              | Multiphase Pulse Skipping 1/8 R TIME Slew Rate | Startup/Boot. When SHDN is pulled high, the MAX17082 begins the startup sequence. Once the REF is above 1.84V, the controller enables the PWM controller and ramps the output voltage up to the boot voltage.                                                                                                                                                                |
| High             | High            | Low                 | High           | Multiphase Forced-PWM Normal R TIME Slew Rate  | Full Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2).                                                                                                                                                                                                                                                                          |
| High             | High            | Low                 | Low            | 1-Phase Forced-PWM Normal R TIME               | Intermediate Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When PSI is pulled low, the MAX17082 immediately disables phase 2. DH2 and DL2 are pulled low.                                                                                                                                                                   |
| High             | High            | High                | X              | 1-Phase Pulse Skipping Normal R TIME Slew Rate | Deeper Sleep Mode. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When DPRSLPVR is pulled high, the MAX17082 immediately enters 1-phase pulse-skipping operation allowing automatic PWM/PFM switchover under light loads. The PWRGD and CLKEN upper thresholds are blanked during downward transitions. DH2 and DL2 are pulled low. |
| High             | Low             | X                   | X              | 1/2 R TIME Slew Rate                           | When SLOW is pulled low during any normal operating mode, the slew rate is changed to half the normal value set by R TIME .                                                                                                                                                                                                                                                  |
| Falling          | X               | X                   | X              | Multiphase Forced-PWM 1/8 R TIME Slew Rate     | Shutdown. When SHDN is pulled low, the MAX17082 immediately pulls PWRGD and PHASEGD low, CLKEN becomes high impedance, all enabled phases are activated, and the output voltage is ramped down to ground. Once the output reaches 0V, the controller enters the low- power shutdown state.                                                                                   |
| High             | X               | X                   | X              | Disabled                                       | Fault Mode. The fault latch has been set by the MAX17082 UVP or thermal-shutdown protection, or by the OVP protection. The controller remains in FAULT mode until V CC power is cycled or SHDN toggled.                                                                                                                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17082 Evaluation Kit

## Table 2. MAX17082 IMVP-6.5 Output-Voltage VID DAC Codes

| D6   | D5   | D4   | D3   | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   | D6   | D5   | D4   | D3 D2   |     | D1   | D0   | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|---------|-----|------|------|----------------------|
| 0    | 0    | 0    | 0    | 0    | 0    | 0    | 1.5000               | 1    | 0    | 0    | 0       | 0   | 0    | 0    | 0.7000               |
| 0    | 0    | 0    | 0    | 0    | 0    | 1    | 1.4875               | 1    | 0    | 0    | 0       | 0   | 0    | 1    | 0.6875               |
| 0    | 0    | 0    | 0    | 0    | 1    | 0    | 1.4750               | 1    | 0    | 0    | 0       | 0   | 1    | 0    | 0.6750               |
| 0    | 0    | 0    | 0    | 0    | 1    | 1    | 1.4625               | 1    | 0    | 0    | 0       | 0   | 1    | 1    | 0.6625               |
| 0    | 0    | 0    | 0    | 1    | 0    | 0    | 1.4500               | 1    | 0    | 0    | 0       | 1   | 0    | 0    | 0.6500               |
| 0    | 0    | 0    | 0    | 1    | 0    | 1    | 1.4375               | 1    | 0    | 0    | 0       | 1   | 0    | 1    | 0.6375               |
| 0    | 0    | 0    | 0    | 1    | 1    | 0    | 1.4250               | 1    | 0    | 0    | 0       | 1   | 1    | 0    | 0.6250               |
| 0    | 0    | 0    | 0    | 1    | 1    | 1    | 1.4125               | 1    | 0    | 0    | 0       | 1   | 1    | 1    | 0.6125               |
| 0    | 0    | 0    | 1    | 0    | 0    | 0    | 1.4000               | 1    | 0    | 0    | 1       | 0   | 0    | 0    | 0.6000               |
| 0    | 0    | 0    | 1    | 0    | 0    | 1    | 1.3875               | 1    | 0    | 0    | 1       | 0   | 0    | 1    | 0.5875               |
| 0    | 0    | 0    | 1    | 0    | 1    | 0    | 1.3750               | 1    | 0    | 0    | 1       | 0   | 1    | 0    | 0.5750               |
| 0    | 0    | 0    | 1    | 0    | 1    | 1    | 1.3625               | 1    | 0    | 0    | 1       | 0   | 1    | 1    | 0.5625               |
| 0    | 0    | 0    | 1    | 1    | 0    | 0    | 1.3500               | 1    | 0    | 0    | 1       | 1   | 0    | 0    | 0.5500               |
| 0    | 0    | 0    | 1    | 1    | 0    | 1    | 1.3375               | 1    | 0    | 0    | 1       | 1   | 0    | 1    | 0.5375               |
| 0    | 0    | 0    | 1    | 1    | 1    | 0    | 1.3250               | 1    | 0    | 0    | 1       | 1   | 1    | 0    | 0.5250               |
| 0    | 0    | 0    | 1    | 1    | 1    | 1    | 1.3125               | 1    | 0    | 0    | 1       | 1   | 1    | 1    | 0.5125               |
| 0    | 0    | 1    | 0    | 0    | 0    | 0    | 1.3000               | 1    | 0    | 1    | 0       | 0   | 0    | 0    | 0.5000               |
| 0 0  | 0 0  | 1 1  | 0 0  | 0 0  | 0 1  | 1 0  | 1.2875 1.2750        | 1 1  | 0 0  | 1 1  | 0 0     | 0 0 | 0 1  | 1 0  | 0.4875 0.4750        |
| 0    | 0    | 1    | 0    | 0    | 1    | 1    | 1.2625               | 1    | 0    | 1    | 0       | 0   | 1    | 1    | 0.4625               |
| 0    | 0    | 1    | 0    | 1    | 0    | 0    | 1.2500               | 1    | 0    | 1    | 0       | 1   | 0    | 0    | 0.4500               |
| 0    | 0    | 1    |      |      |      | 1    | 1.2375               |      |      | 1    | 0       | 1   | 0    | 1    |                      |
| 0    | 0    | 1    | 0 0  | 1 1  | 0 1  | 0    | 1.2250               | 1 1  | 0 0  | 1    | 0       | 1   | 1    | 0    | 0.4375 0.4250        |
| 0    | 0    | 1    | 1    |      |      | 0    | 1.2000               |      | 0    | 1    | 1       | 0   | 0    | 0    |                      |
|      |      |      |      | 0    | 0    |      |                      | 1    |      |      |         |     |      |      | 0.4000               |
| 0    | 0    | 1    | 1    | 0    | 0    | 1    | 1.1875               | 1    | 0    | 1    | 1       | 0   | 0    | 1    | 0.3875               |
| 0    | 0    | 1    | 1    | 0    | 1    | 0    | 1.1750               | 1    | 0    | 1    | 1       | 0   | 1    | 0    | 0.3750               |
| 0    | 0    | 1    | 1    | 0    | 1    | 1    | 1.1625               | 1    | 0    | 1    | 1       | 0   | 1    | 1    | 0.3625               |
| 0    | 0    | 1    | 1    | 1    | 0    | 0    | 1.1500               | 1    | 0    | 1    | 1       | 1   | 0    | 0    | 0.3500               |
| 0    | 0    | 1    | 1    | 1    | 0    | 1    | 1.1375               | 1    | 0    | 1    | 1       | 1   | 0    | 1    | 0.3375               |
| 0    | 0    | 1    | 1    | 1    | 1    | 0    | 1.1250               | 1    | 0    | 1    | 1       | 1   | 1    | 0    | 0.3250               |
| 0    | 0    | 1    | 1    | 1    | 1    | 1    | 1.1125               | 1    | 0    | 1    | 1       | 1   | 1    | 1    | 0.3125               |
| 0    | 1    | 0    | 0    | 0    | 0    | 0    | 1.1000               | 1    | 1    | 0    | 0       | 0   | 0    | 0    | 0.3000               |
| 0    | 1    | 0    | 0    | 0    | 0    | 1    | 1.0875               | 1    | 1    | 0    | 0       | 0   | 0    | 1    | 0.2875               |
| 0    | 1    | 0    | 0    | 0    | 1    | 0    | 1.0750               | 1    | 1    | 0    | 0       | 0   | 1    | 0    | 0.2750               |
| 0    | 1    | 0    | 0    | 0    | 1    | 1    | 1.0625               | 1    | 1    | 0    | 0       | 0   | 1    | 1    | 0.2625               |
|      |      |      |      |      |      |      |                      |      |      |      |         |     |      | 0    | 0.2500               |
| 0    | 1 1  | 0 0  | 0 0  | 1 1  | 0    | 0 1  | 1.0500 1.0375        | 1 1  | 1 1  | 0 0  | 0 0     | 1 1 | 0 0  | 1    | 0.2375               |
| 0 0  | 1    | 0    | 0    | 1    | 0 1  | 0    | 1.0250               | 1    | 1    | 0    | 0       | 1   | 1    | 0    | 0.2250               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

## Table 2. MAX17082 IMVP-6.5 Output-Voltage VID DAC Codes (continued)

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
|    0 |    1 |    0 |    1 |    0 |    0 |    0 |               1.0000 |    1 |    1 |    0 |    1 |    0 |    0 |    0 | 0.2000               |
|    0 |    1 |    0 |    1 |    0 |    0 |    1 |               0.9875 |    1 |    1 |    0 |    1 |    0 |    0 |    1 | 0.1875               |
|    0 |    1 |    0 |    1 |    0 |    1 |    0 |               0.9750 |    1 |    1 |    0 |    1 |    0 |    1 |    0 | 0.1750               |
|    0 |    1 |    0 |    1 |    0 |    1 |    1 |               0.9625 |    1 |    1 |    0 |    1 |    0 |    1 |    1 | 0.1625               |
|    0 |    1 |    0 |    1 |    1 |    0 |    0 |               0.9500 |    1 |    1 |    0 |    1 |    1 |    0 |    0 | 0.1500               |
|    0 |    1 |    0 |    1 |    1 |    0 |    1 |               0.9375 |    1 |    1 |    0 |    1 |    1 |    0 |    1 | 0.1375               |
|    0 |    1 |    0 |    1 |    1 |    1 |    0 |               0.9250 |    1 |    1 |    0 |    1 |    1 |    1 |    0 | 0.1250               |
|    0 |    1 |    0 |    1 |    1 |    1 |    1 |               0.9125 |    1 |    1 |    0 |    1 |    1 |    1 |    1 | 0.1125               |
|    0 |    1 |    1 |    0 |    0 |    0 |    0 |               0.9000 |    1 |    1 |    1 |    0 |    0 |    0 |    0 | 0.1000               |
|    0 |    1 |    1 |    0 |    0 |    0 |    1 |               0.8875 |    1 |    1 |    1 |    0 |    0 |    0 |    1 | 0.0875               |
|    0 |    1 |    1 |    0 |    0 |    1 |    0 |               0.8750 |    1 |    1 |    1 |    0 |    0 |    1 |    0 | 0.0750               |
|    0 |    1 |    1 |    0 |    0 |    1 |    1 |               0.8625 |    1 |    1 |    1 |    0 |    0 |    1 |    1 | 0.0625               |
|    0 |    1 |    1 |    0 |    1 |    0 |    0 |               0.8500 |    1 |    1 |    1 |    0 |    1 |    0 |    0 | 0.0500               |
|    0 |    1 |    1 |    0 |    1 |    0 |    1 |               0.8375 |    1 |    1 |    1 |    0 |    1 |    0 |    1 | 0.0375               |
|    0 |    1 |    1 |    0 |    1 |    1 |    0 |               0.8250 |    1 |    1 |    1 |    0 |    1 |    1 |    0 | 0.0250               |
|    0 |    1 |    1 |    0 |    1 |    1 |    1 |               0.8125 |    1 |    1 |    1 |    0 |    1 |    1 |    1 | 0.0125               |
|    0 |    1 |    1 |    1 |    0 |    0 |    0 |               0.8000 |    1 |    1 |    1 |    1 |    0 |    0 |    0 | 0                    |
|    0 |    1 |    1 |    1 |    0 |    0 |    1 |               0.7875 |    1 |    1 |    1 |    1 |    0 |    0 |    1 | 0                    |
|    0 |    1 |    1 |    1 |    0 |    1 |    0 |               0.7750 |    1 |    1 |    1 |    1 |    0 |    1 |    0 | 0                    |
|    0 |    1 |    1 |    1 |    0 |    1 |    1 |               0.7625 |    1 |    1 |    1 |    1 |    0 |    1 |    1 | 0                    |
|    0 |    1 |    1 |    1 |    1 |    0 |    0 |               0.7500 |    1 |    1 |    1 |    1 |    1 |    0 |    0 | 0                    |
|    0 |    1 |    1 |    1 |    1 |    0 |    1 |               0.7375 |    1 |    1 |    1 |    1 |    1 |    0 |    1 | 0                    |
|    0 |    1 |    1 |    1 |    1 |    1 |    0 |               0.7250 |    1 |    1 |    1 |    1 |    1 |    1 |    0 | 0                    |
|    0 |    1 |    1 |    1 |    1 |    1 |    1 |               0.7125 |    1 |    1 |    1 |    1 |    1 |    1 |    1 | Off                  |

## Reduced Power-Dissipation Voltage Positioning

The MAX17082 includes a transconductance amplifier for adding gain to the voltage-positioning sense path. The amplifier's input is generated by summing the currentsense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's output connects to the voltage-positioned feedback input (FBAC), so the resistance between FBAC and VOUT (R17) determines the voltage positioning gain. Resistor R17 (2.74k Ω )  provides a -1.9mV/A voltage-positioning slope at the output when all phases are active. Remote output and ground sensing eliminate any additional PCB voltage drops.

## Dynamic Output-Voltage Transition Experiment

This MAX17082 EV kit is set to transition the output voltage at 6.25mV/µs ( SLOW = GND). The speed of the transition is altered by scaling resistors R2 and R3.

During the voltage transition, watch the inductor current by looking at the current-sense inputs with a differential scope probe. Observe the low, well-controlled inductor current that accompanies the voltage transition. Slew-rate control during shutdown and startup results in well-controlled currents in to and out of the battery (input source).

There are two methods to create an output-voltage transition.  Select  D0-D6 (SW1). Then either manually change the SW1 settings to a new VID code setting (Table 2), or disable all SW1 settings and drive the VID0-VID6 PCB test points externally to the desired code settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17082 Evaluation Kit

## Load-Transient Experiment

One interesting experiment is to subject the output to large, fast load transients and observe the output with an oscilloscope. Accurate measurement of output ripple and load-transient response invariably requires that ground clip leads be completely avoided and the probe removed to expose the GND shield, so the probe can be directly grounded with as short a wire as possible to the board. Otherwise, EMI and noise pickup corrupt the waveforms.

Most benchtop electronic loads intended for powersupply testing lack the ability to subject the DC-DC converter to ultra-fast load transients. Emulating the supply current (di/dt) at the IMVP-6.5 VCORE pins requires at least 500A/µs load transients. An easy method for generating such an abusive load transient is to install a power MOSFET at the N7 location and install resistor  R20 between 5m Ω and 10m Ω to  monitor  the transient current. Then drive its gate (TP1) with a strong pulse generator at a low-duty cycle (&lt;5%) to minimize heat stress in the MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and induc-

## Table 3. Shutdown Mode ( SHDN )

| SW2 (1, 10)   | SHDN PIN         | MAX17082 OUTPUT                                                   |
|---------------|------------------|-------------------------------------------------------------------|
| Off*          | Connected to VDD | Output enabled-V OUT is selected by VID DAC code (D0-D6) settings |
| On            | Connected to GND | Shutdown mode, V OUT = 0V                                         |

## Table 4. DPRSLPVR, PSI

| DPRSLPVR SW2 (2, 9)   | PSI SW2 (3, 8)   | POWER LEVEL   | OPERATING MODE                                          |
|-----------------------|------------------|---------------|---------------------------------------------------------|
| On (VDD)              | X                | Low current   | 1-phase pulse-skipping mode                             |
| Off (GND)             | On (GND)         | Intermediate  | 1-phase forced-PWM mode                                 |
| Off (GND)*            | Off (VDD)*       | Full          | Normal operation-all phases are active, forced-PWM mode |

*Default position.

X = Don't care.

## Table 5. SLOW

| SW2 (5, 6)   | SLOW PIN         | MAX17082                                           |
|--------------|------------------|----------------------------------------------------|
| Off          | Connected to VDD | Nominal slew rate is set by R2 and R3              |
| On*          | Connected to GND | Slew rate is reduced to half the nominal slew rate |

<!-- image -->

tance in the path of the dummy-load MOSFET. To determine how much load current a particular pulsegenerator amplitude is causing, observe the current through inductor L1. In the buck topology, the load current is approximately equal to the average value of the inductor current.

Note: CPU socket is based on the CALPELLA platform pin configuration.

## Switch SW2 Settings

## Shutdown SW2 (1, 10)

When SHDN goes  low  (SW2  (1,  10)  =  on),  the MAX17082 enters low-power shutdown mode. PWRGD is pulled low immediately and the output voltage ramps down at 1/8 the slew rate set by R2 and R3 (71.1k Ω ). When the controller reaches the 0V target, the drivers are disabled (DL1 and DL2 driven high), the reference is turned off, and the IC supply currents drop to 1µA (max).

When  a  fault  condition  activates  the  shutdown sequence (output undervoltage lockout or thermal shutdown), the protection circuitry sets the fault latch to prevent the controller from restarting. To clear the fault latch and reactivate the MAX17082, toggle SHDN or cycle VDD power.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

## DPRSLPVR SW2 (2, 9), PSI SW2 (3, 8)

DPRSLPVR and PSI together determine the operating mode, as shown in Table 4. The MAX17082 will be forced into full-phase PWM mode during startup, while in  boot mode, during the transition from boot mode to VID mode, and during shutdown.

## SLOW , SW2 (5, 6)

This 1V logic input signal selects between the nominal and 'slow' (half of nominal rate) slew rates. When SLOW is forced high, the selected nominal slew rate is set by the TIME resistance. When SLOW is forced low, the slew rate is reduced to half the nominal slew rate.

## Table 6. PGDIN

| SW2 (4, 7)   | PGDIN PIN        | MAX17082 OUTPUT                                                              |
|--------------|------------------|------------------------------------------------------------------------------|
| Off          | Connected to GND | VOUT remains at the boot voltage. CLKEN remains high, and PWRGD remains low. |
| On*          | Connected to VDD | VOUT transitions to selected VID voltage, and CLKEN is pulled low.           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## PGDIN, SW2 (4, 7)

PGDIN indicates the power status of other system rails and is used for power-supply sequencing. After powerup to the boot voltage, the output voltage remains at VBOOT, CLKEN remains high, and PWRGD remains low as long as the PGDIN stays low. When PGDIN is pulled high, the output transitions to selected VID voltage, and CLKEN is  pulled  low.  If  the  system  pulls  PGDIN  low during normal operation, the MAX17082 immediately drives CLKEN high, pulls PWRGD low, and slews the output to the boot voltage (using 2-phase pulse-skipping mode). The controller remains at the boot voltage until  PGDIN goes high again, SHDN is  toggled, or the VDD is cycled.

## MAX17082 Evaluation Kit

Figure 1a. MAX17082 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX17082 Evaluation Kit

<!-- image -->

Figure 1b. MAX17082 EV Kit Schematic (Sheet 2 of 2)

## MAX17082 Evaluation Kit

Figure 2. MAX17082 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX17082 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

Figure 4. MAX17082 EV Kit PCB Layout-Internal Layer 2 (VBATT/PGND Plane)

<!-- image -->

Figure 5. MAX17082 EV Kit PCB Layout-Internal Layer 3 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17082 Evaluation Kit

Figure 6. MAX17082 EV Kit PCB Layout-Internal Layer 4 (PGND Layer)

<!-- image -->

<!-- image -->

Figure 7. MAX17082 EV Kit PCB Layout -Internal Layer 5 (AGND/PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17082 Evaluation Kit

Figure 8. MAX17082 EV Kit PCB Layout -Internal Layer 6 (Signal Layer)

<!-- image -->

Figure 9. MAX17082 EV Kit PCB Layout -Internal Layer 7 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17082 Evaluation Kit

Figure 10. MAX17082 EV Kit PCB Layout-Solder Side

<!-- image -->

<!-- image -->

Figure 11. MAX17082 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX17021/MAX17033/MAX17034/MAX17082

## MAX17082 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                             | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------|-----------------|
|                 0 | 10/08           | Initial release                                                         | -               |
|                 1 | 4/09            | Updated components C12, C17, C18, and R15 to improve load line accuracy | 2, 9            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_