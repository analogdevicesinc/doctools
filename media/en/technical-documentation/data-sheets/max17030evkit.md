<!-- lastmod 2022-08-02 -->
## MAX17030:

- ♦ Triple-Phase, Fast-Response Interleaved, Quick-PWM
- ♦ 2 Internal Drivers + 1 External Driver (MAX8791)
- ♦ Intel IMVP-6.5 Code-Set Compliant (Calpella Socket Configuration)
- ♦ Dynamic Phase Selection Optimizes Active/Sleep Efficiency
- ♦ Transient Phase Overlap Reduces Output Capacitance
- ♦ Active Voltage Positioning with Adjustable Gain
- ♦ High Speed, Accuracy, and Efficiency
- ♦ Low Bulk Output Capacitor Count
- ♦ 7V to 20V Input-Voltage Range
- ♦ 0 to 1.5000V Output-Voltage Range (7-Bit DAC)
- ♦ 66A Peak Load-Current Capability (22A Each Phase)
- ♦ Accurate Lossless Current Balance and Current Limit
- ♦ 300kHz Switching Frequency (per Phase)
- ♦ IMVP-6.5 Power Sequencing and Timing Compliant
- ♦ Remote Output and Ground Sense
- ♦ Power-Good (PWRGD) Output and Indicator (D3)
- ♦ Clock Enable ( CLKEN ) and Thermal Fault ( VRHOT ) Outputs and Indicators (D4 and D5)
- ♦ Current Monitor (IMON) Output
- ♦ Output Overvoltage and Undervoltage Fault Protections
- ♦ 40-Pin Thin QFN Package
- MAX17000:
- ♦ Complete DDR Supplies: VCCDDR, VTTDDR, and VTTR
- ♦ 7V to 20V Input-Voltage Range
- ♦ 400kHz Switching Frequency
- ♦ 10A Output Current Capability (VCCDDR)
- ♦ 2A Output Current Capability (VTTDDR)
- ♦ 3mA Output Current Capability (VTTR)
- ♦ Overvoltage Protection
- ♦ Power-Good Output Indicators (D15 and D16)
- ♦ 24-Pin Thin QFN Package
- MAX17007A:
- ♦ I/O Supplies: VTT1 and VTT2
- ♦ 7V to 20V Input-Voltage Range
- ♦ 300kHz Switching Frequency
- ♦ 12A Output Current Capability (VTT1)
- ♦ 12A Output Current Capability (VTT2)
- ♦ Overvoltage and Undervoltage Protections
- ♦ Thermal Protection
- ♦ Power-Good Output Indicators (D19 and D20)
- ♦ 28-Pin Thin QFN Package MAX17028:
- ♦ GMCH Graphics Supply: VCCAXG
- ♦ 7V to 20V Input-Voltage Range
- ♦ 400kHz Switching Frequency
- ♦ 14A Output Current Capability
- ♦ Overvoltage and Undervoltage Protections
- ♦ Thermal Fault ( VRHOT ) Output Indicator (D12)
- ♦ Current Monitor (DFGT\_IMON) Output
- ♦ Power-Good (PWRGD) Output and Indicator (D13)
- ♦ 32-Pin Thin QFN Package

<!-- image -->

## MAX17030 Evaluation Kit

## General Description

The MAX17030 evaluation kit (EV kit) demonstrates the high-power, dynamically adjustable, multiphase IMVP6.5 notebook CPU application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage CPU core VCC rail. The MAX17030 EV kit meets the Intel mobile IMVP-6.5 CPU's transient voltage specification, powergood signaling, voltage regulator thermal monitoring ( VRHOT ),  and power-good output (PWRGD). The MAX17030 EV kit consists of the MAX17030 3-phase interleaved Quick-PWM™ step-down controller and one external MAX8791 single synchronous MOSFET driver. The MAX17030 EV kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. A slew-rate controller allows controlled transitions between VID codes, controlled soft-start and shutdown, and controlled exit suspend voltage. Precision slew-rate control provides 'just-in-time' arrival at the new DAC setting, minimizing surge currents to and from the battery.

Two dedicated system inputs ( PSI and DPRSLPVR) dynamically select the operating mode and number of active phases, optimizing the overall efficiency during the CPU's active and sleep states.

The MAX17030 includes latched output undervoltagefault  protection,  overvoltage-fault  protection,  and  thermal-overload protection. It also includes a voltage regulator  power-good (PWRGD) output, a clock enable ( CLKEN ) output, and a current monitor (IMON) output.

The MAX17030 provides a digitally adjustable 0 to 1.5000V output voltage (7-bit on-board DAC) from a 7V to 20V battery-input range. Each phase is designed for a  20A thermal design current, and delivers up to 22A peak output current for a total of 66A. The EV kit operates at 300kHz switching frequency (per phase) and has superior line- and load-transient response.

The MAX17030 EV kit also evaluates the MAX17000, MAX17007A, and MAX17028 DC-DC converters.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17030EVKIT+ | EV Kit |

- +Denotes lead(Pb)-free and RoHS compliant.

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

## Features

## MAX17030 Evaluation Kit

| DESIGNATION                                                                                                                                                                                                                                                        |   QTY | DESCRIPTION                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLKEN , CORE_VR_EN, DFGT_DPRSLPVR, DFGT_IMON, DFGT_VR_EN, DPRSLPVR, DRSKP , EN1, EN2, GND_SENSE, IMON, PGD_IN, PGOOD1, PGOOD2, PGOODVTT1, PGOODVTT2, PSI , PWM, PWRGD (x2), SHDN , SKIP , STDBY , VCCAXG_SENSE, VCCDDR, VOUT_SENSE, VRHOT , VRHOT1 , VSSAXG_SENSE, |    32 | Test points                                                                                                                                             |
| C1-C4, C68, C69, C105, C106, C130, C131, C160-C163                                                                                                                                                                                                                 |    14 | 10µF ±20%, 25V X5R ceramic capacitors (1210) Murata GRM32DR61E106KA12L TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM KEMET C1210C106M3RAC |
| C5, C7, C8, C70, C107, C149, C166, C168                                                                                                                                                                                                                            |     8 | 330µF, 2V, 4.5m Ω low-ESR polymer capacitors (D case) Panasonic EEFSX0D331E4 or NEC TOKIN PSGV0E337M4.5 KEMET T520V337M2R5ATE4R5                        |
| C6, C71, C108, C150, C167, C169                                                                                                                                                                                                                                    |     0 | Not installed, capacitors (D case)                                                                                                                      |
| C9                                                                                                                                                                                                                                                                 |     0 | Not installed, capacitor (0805)                                                                                                                         |

## Component List

| DESIGNATION                                                                                                                       |   QTY | DESCRIPTION                                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------|
| C10, C11                                                                                                                          |     2 | 2.2µF ±20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A225M or Murata GRM188R61A225M or AVX 0603ZD225MAT                            |
| C12, C113, C121, C134, C172, C182                                                                                                 |     6 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K or equivalent                                 |
| C13-C16, C73, C76, C111, C180                                                                                                     |     8 | 0.22µF ±20%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A224K Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT       |
| C17, C18, C19, C21-C26, C28, C29, C31, C74, C75, C77, C109, C110, C112, C114, C137-C140, C170, C171, C175, C178, C179, C181, C183 |     0 | Not installed, capacitors (0603)                                                                                                         |
| C20, C102, C104, C135, C136, C164, C165, C174                                                                                     |     8 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K                                                |
| C27                                                                                                                               |     0 | Not installed, capacitor-short (PC trace) (0603)                                                                                         |
| C30                                                                                                                               |     0 | Not installed, 1000µF, 50V aluminum electrolytic capacitor (12.5mm x 25mm) SANYO 50MV1000AX                                              |
| C32, C33, C115-C120, C141, C142, C143, C145-C148, C184-C193                                                                       |    25 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106ME19L TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

## Component List (continued)

| DESIGNATION                              |   QTY | DESCRIPTION                                                                                                       |
|------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C34-C60                                  |    27 | 22µF, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J226ME39L TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG  |
| C72, C100, C101, C132, C133, C176, C177  |     7 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K Taiyo Yuden EMK107BJ683MA Murata GRM188R61C105K    |
| C103                                     |     1 | 100pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H101K Taiyo Yuden UMK107B101KZ                          |
| C144                                     |     1 | 0.47µF ± 20%, 10V X5R ceramic capacitor (0603) Murata GRM188R71C474M Taiyo Yuden LMK107BJ474MA TDK C1608X5R1A474M |
| C173                                     |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H222K TDK C1608X7R1H222K                            |
| D1, D2, D6, D10, D14, D17, D18           |     7 | 3A, 30V Schottky diodes Nihon EC31QS03L Central Semi CMSH3-40M                                                    |
| D3, D4, D5, D12, D13, D15, D16, D19, D20 |     9 | LEDs, green, clear, SMD (0805) Lite-On Electronics LTST-C170GKT Digi-Key 160-1179-1-ND                            |
| JU1, JU4, JU5, JU6                       |     4 | 3-pin headers (0.1in centers)                                                                                     |
| JU8                                      |     1 | 2-pin header (0.1in centers)                                                                                      |
| L1, L2, L3                               |     3 | 0.36µH, 36A, 0.82m Ω power inductors Panasonic ETQP4LR36ZFC TOKO FDUE1040D-R36M                                   |
| L4                                       |     1 | 0.42µH, 20A, 1.55m Ω power inductor (6.7mm x 8mm x 4 mm) NEC TOKIN MPC0740LR42C TOKO FDUE640-R42M                 |

<!-- image -->

| DESIGNATION                                                                                 |   QTY | DESCRIPTION                                                                         |
|---------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------|
| L5, L6, L7                                                                                  |     3 | 0.6µH, 17A, 2.3m Ω power inductors (6.7mm x 8mm x 5 mm) NEC TOKIN MPC0750LR60C      |
| N1, N2, N8, N11, N13, N15, N17                                                              |     7 | n-channel MOSFETs (8 SO, PowerPAK) Fairchild FDS6298 Vishay (Siliconix) SI4386DY    |
| N3-N6, N9, N10, N12, N14, N16, N18                                                          |    10 | n-channel MOSFETs (8 SO, PowerPAK) Fairchild FDS8670 Vishay (Siliconix) SI4626ADY   |
| R1, R16, R44, R46, R51, R73, R74, R76, R77, R107, R142                                      |    11 | 10 Ω ±5% resistors (0603)                                                           |
| R2                                                                                          |     1 | 137k Ω ±1% resistor (0603)                                                          |
| R3                                                                                          |     1 | 14k Ω ±1% resistor (0603)                                                           |
| R4, R156                                                                                    |     2 | 200k Ω ±1% resistors (0603)                                                         |
| R5, R6, R15, R19, R24, R32, R47, R50, R62, R65, R79, R96, R97, R106, R120, R128, R139, R170 |    18 | 0 Ω resistors (0603)                                                                |
| R7, R11, R21, R67, R69                                                                      |     5 | 2.21k Ω ±1% resistors (0603)                                                        |
| R8, R12, R35                                                                                |     3 | 3.24k Ω ±1% resistors (0603)                                                        |
| R9, R13, R34                                                                                |     3 | 40.2k Ω ±1% resistors (0603)                                                        |
| R10, R14, R36, R68, R115, R134, R148                                                        |     7 | 10k Ω ±1% NTC thermistors, β = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F |
| R17, R54, R133                                                                              |     3 | 6.04k Ω ±1% resistors (0603)                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

## Component List (continued)

| DESIGNATION      |   QTY | DESCRIPTION                                                         |
|------------------|-------|---------------------------------------------------------------------|
| R121             |     0 | Not installed, resistor-short (PC trace) (0805)                     |
| R135             |     1 | 4.22k Ω ±1% resistor (0603)                                         |
| R136             |     1 | 3.01k Ω ±1% resistor (0603)                                         |
| R140             |     1 | 90.9k Ω ±1% resistor (0603)                                         |
| R141             |     1 | 110k Ω ±1% resistor (0603)                                          |
| R146             |     1 | 4.99k Ω ±1% resistor (0603)                                         |
| R149             |     1 | 1.3k Ω ±1% resistor (0603)                                          |
| R152             |     1 | 5.76k Ω ±1% resistor (0603)                                         |
| R158, R159, R160 |     3 | 2 Ω ±5% resistors (0603)                                            |
| REFIN1, SKIPVTT  |     0 | Not installed, test points                                          |
| SW1, SW3         |     2 | 7-position low-profile DIP switches                                 |
| SW2, SW4, SW5    |     3 | 4-position low-profile DIP switches                                 |
| U1               |     1 | 3/2-phase Quick-PWM VID controller (40 TQFN-EP*) Maxim MAX17030GTL+ |
| U2               |     1 | CPU socket rPGA-989                                                 |
| U3               |     1 | Single driver (8 TQFN) Maxim MAX8791GTA+                            |
| U4               |     1 | 1-phase Quick-PWM VID controller (32 TQFN-EP*) Maxim MAX17028GTJ+   |
| U5               |     1 | DDR memory power controller (24 TQFN) Maxim MAX17000ETG+            |
| U6               |     1 | Dual step-down Quick-PWM controller (28 TQFN) Maxim MAX17007AGTI+   |
| -                |     1 | PCB: MAX17030 EVALUATION KIT+                                       |

| DESIGNATION                                                                                                                                          |   QTY | DESCRIPTION                                                                                                                                                                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R18, R48, R49, R53, R71, R72, R87, R89-R95, R98, R99, R103, R111, R112, R117, R118, R119, R122-R127, R129, R131, R132, R137, R138, R147, R150, R151, |     0 | Not installed, resistors (0603) R18, R48, R49, R87, R89-R95, R98, R99, R111, R112, R119, R122-R127, R129, R147, R157 are open; R53, R71, R72, R103, R117, R118, R131, R132, R137, R138, R150, R151 are short (PC trace) |
| R20, R52, R100, R130                                                                                                                                 |     0 | Not installed, resistors-short (PC trace) (1210)                                                                                                                                                                        |
| R22, R23, R30                                                                                                                                        |     3 | 1.91k Ω ±5% resistors (0603)                                                                                                                                                                                            |
| R25, R60                                                                                                                                             |     2 | 13k Ω ±1% resistors (0603)                                                                                                                                                                                              |
| R26, R61                                                                                                                                             |     2 | 100k Ω ±5% NTC thermistors, β = 4250 (0603) Murata NCP18WF104J03RBTDK NTCG163JF104J                                                                                                                                     |
| R27, R28, R29, R31, R58, R66, R102, R108, R109, R110, R144, R155                                                                                     |    12 | 100k Ω ±5% resistors (0603)                                                                                                                                                                                             |
| R33                                                                                                                                                  |     1 | 11.5k Ω ±1% resistor (0603)                                                                                                                                                                                             |
| R37-R43, R80-R86                                                                                                                                     |    14 | 100k Ω ±1% resistors (0603)                                                                                                                                                                                             |
| R45, R88                                                                                                                                             |     2 | 100 Ω ±5% resistors (0603)                                                                                                                                                                                              |
| R55                                                                                                                                                  |     1 | 63.4k Ω ±1% resistor (0603)                                                                                                                                                                                             |
| R56, R101, R145                                                                                                                                      |     3 | 150k Ω ±1% resistors (0603)                                                                                                                                                                                             |
| R57, R59, R78, R104, R105, R143, R154                                                                                                                |     7 | 1k Ω ±5% resistors (0603)                                                                                                                                                                                               |
| R63, R64, R153                                                                                                                                       |     3 | 10k Ω ±1% resistors (0603)                                                                                                                                                                                              |
| R70                                                                                                                                                  |     1 | 15k Ω ±1% resistor (0603)                                                                                                                                                                                               |
| R75                                                                                                                                                  |     1 | 13.3k Ω ±1% resistor (0603)                                                                                                                                                                                             |
| R113, R114                                                                                                                                           |     2 | 3.48 k Ω ±1% resistors (0603)                                                                                                                                                                                           |
| R116                                                                                                                                                 |     1 | 20k Ω ±1% resistor (0603)                                                                                                                                                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX17030 EV kit
- 7V to 20V power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 1A
- DC bias power supply, 3.3V at 100mA
- Three dummy loads capable of sinking 22A each
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope

## MAX17030 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Nihon Inter Electronics Corp.          | 847-843-7500 | www.niec.co.jp              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17030 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Set SW1 (2, 13), SW1 (4, 11), and SW1 (6, 9) to the on positions. Set SW4 (1, 8) and SW5 (4, 5) to the on positions.The output voltage is set for 0.9750V.

- 3) Turn on the battery power before turning on the 5V bias power. Turn on the 5V and 3.3V power supplies.
- 4) Observe the 0.9750V output voltage with the DMM and/or oscilloscope. Look at the LX switching nodes and MOSFET gate-drive signals while varying the load current.

## Detailed Description of Hardware

This 66A multiphase buck-regulator design is optimized for a 300kHz switching frequency (per phase) and output-voltage settings around 1V. At VOUT = 1V and VIN = 12V, the inductor ripple is approximately 30% (LIR = 0.30). The MAX17030 controller interleaves all the active phases, resulting in out-of-phase operation that minimizes the input and output filtering requirements. The multiphase controller shares the current between three phases that operate 120 ° out-of-phase, supplying up to 22A per phase.

## Procedure

The MAX17030 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Ensure that the circuit is connected correctly to the supplies and dummy load prior to applying any power.
- 2) Verify  that  all  positions  of  switch  SW2  are  off.  The DAC code settings (D6-D0) are set by switch SW1.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

## Setting the Output Voltage

The MAX17030 has an internal digital-to-analog converter (DAC) that programs the output voltage. The output voltage can be digitally set from 0 to 1.5000V (Table 2) from the D0-D6 pins. There are two different ways of setting the output voltage:

- 1) Drive the external VID0-VID6 inputs (all SW1 positions are off). The output voltage is set by driving VID0-VID6 with open-drain drivers (pullup resistors are included on the board) or 3V/5V CMOS output logic levels.
- 2) Switch SW1. When SW1 positions are off, the MAX17030's D0-D6 inputs are at logic 0 (connected to GND). When SW1 positions are on, D0-D6 inputs are at logic 1 (connected to VTT1). The output voltage can be changed during operation by activating SW1 on and off. As shipped, the EV kit is configured with SW1 positions set for 0.9750V output (Table 2). Refer to the MAX17030 IC data sheet for more information.

## Table 1. MAX17030 Operating Mode Truth Table

| INPUTS          | INPUTS              | INPUTS         | PHASE                                           |                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------|---------------------|----------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW5 (1, 8) | DPRSLPVR SW5 (2, 7) | PSI SW5 (3, 6) | OPERATION*                                      | OPERATING MODE                                                                                                                                                                                                                                                                                                                                                                          |
| GND             | X                   | X              | Disabled                                        | Low-Power Shutdown Mode. DL1 and DL2 are forced low and the controller is disabled. The supply current drops to 1µA (max).                                                                                                                                                                                                                                                              |
| Rising          | X                   | X              | Multiphase pulse-skipping 1/4 R TIME slew rate  | Startup/Boot. When SHDN is pulled high, the MAX17030 begins the startup sequence. Once the REF is above 1.84V, the controller enables the PWM controller and ramps the output voltage up to the boot voltage.                                                                                                                                                                           |
| High            | Low                 | High           | Multiphase forced-PWM nominal R TIME slew rate  | Full Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2).                                                                                                                                                                                                                                                                                     |
| High            | Low                 | Low            | (N-1)-phase forced-PWM nominal R TIME slew rate | Intermediate Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When PSI is pulled low, the MAX17030 immediately disables phase 3. PWM3is three-state and DRSKP is low.                                                                                                                                                                     |
| High            | High                | X              | 1-phase pulse-skipping nominal R TIME slew rate | Deeper Sleep Mode. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2). When DPRSLPVR is pulled high, the MAX17030 immediately enters 1-phase pulse-skipping operation, allowing automatic PWM/PFM switchover under light loads. The PWRGD and CLKEN upper thresholds are blanked. DH2 and DL2 are pulled low. PWM3 is three-state and DRSKP is low. |
| Falling         | X                   | X              | Multiphase forced-PWM 1/4 R TIME slew rate      | Shutdown. When SHDN is pulled low, the MAX17030 immediately pulls PWRGD low, CLKEN becomes high impedance, all enabled phases are activated, and the output voltage is ramped down to 12.5mV, then DH_ and DL_ are pulled low, and CSN1 discharge FET is turned on.                                                                                                                     |
| High            | X                   | X              | Disabled                                        | Fault Mode. The fault latch has been set by the MAX17030 UVP or thermal-shutdown protection, or by the OVP protection. The controller remains in fault mode until V CC power is cycled or SHDN toggled.                                                                                                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

## Table 2. MAX17030 IMVP-6.5 Output-Voltage VID DAC Codes

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|------|----------------------|
|    0 |    0 |    0 |    0 |    0 |    0 |    0 |               1.5000 |
|    0 |    0 |    0 |    0 |    0 |    0 |    1 |               1.4875 |
|    0 |    0 |    0 |    0 |    0 |    1 |    0 |               1.4750 |
|    0 |    0 |    0 |    0 |    0 |    1 |    1 |               1.4625 |
|    0 |    0 |    0 |    0 |    1 |    0 |    0 |               1.4500 |
|    0 |    0 |    0 |    0 |    1 |    0 |    1 |               1.4375 |
|    0 |    0 |    0 |    0 |    1 |    1 |    0 |               1.4250 |
|    0 |    0 |    0 |    0 |    1 |    1 |    1 |               1.4125 |
|    0 |    0 |    0 |    1 |    0 |    0 |    0 |               1.4000 |
|    0 |    0 |    0 |    1 |    0 |    0 |    1 |               1.3875 |
|    0 |    0 |    0 |    1 |    0 |    1 |    0 |               1.3750 |
|    0 |    0 |    0 |    1 |    0 |    1 |    1 |               1.3625 |
|    0 |    0 |    0 |    1 |    1 |    0 |    0 |               1.3500 |
|    0 |    0 |    0 |    1 |    1 |    0 |    1 |               1.3375 |
|    0 |    0 |    0 |    1 |    1 |    1 |    0 |               1.3250 |
|    0 |    0 |    0 |    1 |    1 |    1 |    1 |               1.3125 |
|    0 |    0 |    1 |    0 |    0 |    0 |    0 |               1.3000 |
|    0 |    0 |    1 |    0 |    0 |    0 |    1 |               1.2875 |
|    0 |    0 |    1 |    0 |    0 |    1 |    0 |               1.2750 |
|    0 |    0 |    1 |    0 |    0 |    1 |    1 |               1.2625 |
|    0 |    0 |    1 |    0 |    1 |    0 |    0 |               1.2500 |
|    0 |    0 |    1 |    0 |    1 |    0 |    1 |               1.2375 |
|    0 |    0 |    1 |    0 |    1 |    1 |    0 |               1.2250 |
|    0 |    0 |    1 |    0 |    1 |    1 |    1 |               1.2125 |
|    0 |    0 |    1 |    1 |    0 |    0 |    0 |               1.2000 |
|    0 |    0 |    1 |    1 |    0 |    0 |    1 |               1.1875 |
|    0 |    0 |    1 |    1 |    0 |    1 |    0 |               1.1750 |
|    0 |    0 |    1 |    1 |    0 |    1 |    1 |               1.1625 |
|    0 |    0 |    1 |    1 |    1 |    0 |    0 |               1.1500 |
|    0 |    0 |    1 |    1 |    1 |    0 |    1 |               1.1375 |
|    0 |    0 |    1 |    1 |    1 |    1 |    0 |               1.1250 |
|    0 |    0 |    1 |    1 |    1 |    1 |    1 |               1.1125 |
|    0 |    1 |    0 |    0 |    0 |    0 |    0 |               1.1000 |
|    0 |    1 |    0 |    0 |    0 |    0 |    1 |               1.0875 |
|    0 |    1 |    0 |    0 |    0 |    1 |    0 |               1.0750 |
|    0 |    1 |    0 |    0 |    0 |    1 |    1 |               1.0625 |
|    0 |    1 |    0 |    0 |    1 |    0 |    0 |               1.0500 |
|    0 |    1 |    0 |    0 |    1 |    0 |    1 |               1.0375 |
|    0 |    1 |    0 |    0 |    1 |    1 |    0 |               1.0250 |
|    0 |    1 |    0 |    0 |    1 |    1 |    1 |               1.0125 |

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|------|----------------------|
|    1 |    0 |    0 |    0 |    0 |    0 |    0 |               0.7000 |
|    1 |    0 |    0 |    0 |    0 |    0 |    1 |               0.6875 |
|    1 |    0 |    0 |    0 |    0 |    1 |    0 |               0.6750 |
|    1 |    0 |    0 |    0 |    0 |    1 |    1 |               0.6625 |
|    1 |    0 |    0 |    0 |    1 |    0 |    0 |               0.6500 |
|    1 |    0 |    0 |    0 |    1 |    0 |    1 |               0.6375 |
|    1 |    0 |    0 |    0 |    1 |    1 |    0 |               0.6250 |
|    1 |    0 |    0 |    0 |    1 |    1 |    1 |               0.6125 |
|    1 |    0 |    0 |    1 |    0 |    0 |    0 |               0.6000 |
|    1 |    0 |    0 |    1 |    0 |    0 |    1 |               0.5875 |
|    1 |    0 |    0 |    1 |    0 |    1 |    0 |               0.5750 |
|    1 |    0 |    0 |    1 |    0 |    1 |    1 |               0.5625 |
|    1 |    0 |    0 |    1 |    1 |    0 |    0 |               0.5500 |
|    1 |    0 |    0 |    1 |    1 |    0 |    1 |               0.5375 |
|    1 |    0 |    0 |    1 |    1 |    1 |    0 |               0.5250 |
|    1 |    0 |    0 |    1 |    1 |    1 |    1 |               0.5125 |
|    1 |    0 |    1 |    0 |    0 |    0 |    0 |               0.5000 |
|    1 |    0 |    1 |    0 |    0 |    0 |    1 |               0.4875 |
|    1 |    0 |    1 |    0 |    0 |    1 |    0 |               0.4750 |
|    1 |    0 |    1 |    0 |    0 |    1 |    1 |               0.4625 |
|    1 |    0 |    1 |    0 |    1 |    0 |    0 |               0.4500 |
|    1 |    0 |    1 |    0 |    1 |    0 |    1 |               0.4375 |
|    1 |    0 |    1 |    0 |    1 |    1 |    0 |               0.4250 |
|    1 |    0 |    1 |    0 |    1 |    1 |    1 |               0.4125 |
|    1 |    0 |    1 |    1 |    0 |    0 |    0 |               0.4000 |
|    1 |    0 |    1 |    1 |    0 |    0 |    1 |               0.3875 |
|    1 |    0 |    1 |    1 |    0 |    1 |    0 |               0.3750 |
|    1 |    0 |    1 |    1 |    0 |    1 |    1 |               0.3625 |
|    1 |    0 |    1 |    1 |    1 |    0 |    0 |               0.3500 |
|    1 |    0 |    1 |    1 |    1 |    0 |    1 |               0.3375 |
|    1 |    0 |    1 |    1 |    1 |    1 |    0 |               0.3250 |
|    1 |    0 |    1 |    1 |    1 |    1 |    1 |               0.3125 |
|    1 |    1 |    0 |    0 |    0 |    0 |    0 |               0.3000 |
|    1 |    1 |    0 |    0 |    0 |    0 |    1 |               0.2875 |
|    1 |    1 |    0 |    0 |    0 |    1 |    0 |               0.2750 |
|    1 |    1 |    0 |    0 |    0 |    1 |    1 |               0.2625 |
|    1 |    1 |    0 |    0 |    1 |    0 |    0 |               0.2500 |
|    1 |    1 |    0 |    0 |    1 |    0 |    1 |               0.2375 |
|    1 |    1 |    0 |    0 |    1 |    1 |    0 |               0.2250 |
|    1 |    1 |    0 |    0 |    1 |    1 |    1 |               0.2125 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX17000/MAX17007A/MAX17028/MAX17030

## MAX17030 Evaluation Kit

## Table 2. MAX17030 IMVP-6.5 Output-Voltage VID DAC Codes (continued)

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|------|----------------------|
|    0 |    1 |    0 |    1 |    0 |    0 |    0 |               1.0000 |
|    0 |    1 |    0 |    1 |    0 |    0 |    1 |               0.9875 |
|    0 |    1 |    0 |    1 |    0 |    1 |    0 |               0.9750 |
|    0 |    1 |    0 |    1 |    0 |    1 |    1 |               0.9625 |
|    0 |    1 |    0 |    1 |    1 |    0 |    0 |               0.9500 |
|    0 |    1 |    0 |    1 |    1 |    0 |    1 |               0.9375 |
|    0 |    1 |    0 |    1 |    1 |    1 |    0 |               0.9250 |
|    0 |    1 |    0 |    1 |    1 |    1 |    1 |               0.9125 |
|    0 |    1 |    1 |    0 |    0 |    0 |    0 |               0.9000 |
|    0 |    1 |    1 |    0 |    0 |    0 |    1 |               0.8875 |
|    0 |    1 |    1 |    0 |    0 |    1 |    0 |               0.8750 |
|    0 |    1 |    1 |    0 |    0 |    1 |    1 |               0.8625 |
|    0 |    1 |    1 |    0 |    1 |    0 |    0 |               0.8500 |
|    0 |    1 |    1 |    0 |    1 |    0 |    1 |               0.8375 |
|    0 |    1 |    1 |    0 |    1 |    1 |    0 |               0.8250 |
|    0 |    1 |    1 |    0 |    1 |    1 |    1 |               0.8125 |
|    0 |    1 |    1 |    1 |    0 |    0 |    0 |               0.8000 |
|    0 |    1 |    1 |    1 |    0 |    0 |    1 |               0.7875 |
|    0 |    1 |    1 |    1 |    0 |    1 |    0 |               0.7750 |
|    0 |    1 |    1 |    1 |    0 |    1 |    1 |               0.7625 |
|    0 |    1 |    1 |    1 |    1 |    0 |    0 |               0.7500 |
|    0 |    1 |    1 |    1 |    1 |    0 |    1 |               0.7375 |
|    0 |    1 |    1 |    1 |    1 |    1 |    0 |               0.7250 |
|    0 |    1 |    1 |    1 |    1 |    1 |    1 |               0.7125 |

## Reduced Power-Dissipation Voltage Positioning

The MAX17030 includes a transconductance amplifier for adding gain to the voltage-positioning sense path. The amplifier's input is generated by summing the currentsense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's output connects to the voltage-positioned feedback input (FBAC), so the resistance between FBAC and VOUT (R17) determines the voltage-positioning gain. Resistor R17 (6.04k Ω )  provides a -1.9mV/A voltage-positioning slope at the output when all phases are active. Remote output and ground sensing eliminate any additional PCB voltage drops.

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|
|    1 |    1 |    0 |    1 |    0 |    0 |    0 | 0.2000               |
|    1 |    1 |    0 |    1 |    0 |    0 |    1 | 0.1875               |
|    1 |    1 |    0 |    1 |    0 |    1 |    0 | 0.1750               |
|    1 |    1 |    0 |    1 |    0 |    1 |    1 | 0.1625               |
|    1 |    1 |    0 |    1 |    1 |    0 |    0 | 0.1500               |
|    1 |    1 |    0 |    1 |    1 |    0 |    1 | 0.1375               |
|    1 |    1 |    0 |    1 |    1 |    1 |    0 | 0.1250               |
|    1 |    1 |    0 |    1 |    1 |    1 |    1 | 0.1125               |
|    1 |    1 |    1 |    0 |    0 |    0 |    0 | 0.1000               |
|    1 |    1 |    1 |    0 |    0 |    0 |    1 | 0.0875               |
|    1 |    1 |    1 |    0 |    0 |    1 |    0 | 0.0750               |
|    1 |    1 |    1 |    0 |    0 |    1 |    1 | 0.0625               |
|    1 |    1 |    1 |    0 |    1 |    0 |    0 | 0.0500               |
|    1 |    1 |    1 |    0 |    1 |    0 |    1 | 0.0375               |
|    1 |    1 |    1 |    0 |    1 |    1 |    0 | 0.0250               |
|    1 |    1 |    1 |    0 |    1 |    1 |    1 | 0.0125               |
|    1 |    1 |    1 |    1 |    0 |    0 |    0 | 0                    |
|    1 |    1 |    1 |    1 |    0 |    0 |    1 | 0                    |
|    1 |    1 |    1 |    1 |    0 |    1 |    0 | 0                    |
|    1 |    1 |    1 |    1 |    0 |    1 |    1 | 0                    |
|    1 |    1 |    1 |    1 |    1 |    0 |    0 | 0                    |
|    1 |    1 |    1 |    1 |    1 |    0 |    1 | 0                    |
|    1 |    1 |    1 |    1 |    1 |    1 |    0 | 0                    |
|    1 |    1 |    1 |    1 |    1 |    1 |    1 | Off                  |

## Dynamic Output-Voltage Transition Experiment

This MAX17030 EV kit is set to transition the output voltage at 6mV/µs. The speed of the transition is altered by scaling resistors R2 and R3.

During the voltage transition, watch the inductor current by looking at the current-sense inputs with a differential scope probe. Observe the low, well-controlled inductor current that accompanies the voltage transition. Slew-rate control during shutdown and startup results in well-controlled currents in to and out of the battery (input source).

There are two methods to create an output-voltage transition.  Select  D0-D6 (SW1). Then either manually change the SW1 settings to a new VID code setting (Table 2), or disable all SW1 settings and drive the VID0-VID6 PCB test points externally to the desired code settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

## Switch SW5 Settings

## Shutdown SW5 (1, 8)

When SHDN goes low (SW5 (1, 8) = on), the MAX17030 enters low-power shutdown mode. PWRGD is pulled low immediately and the output voltage ramps down at 1/4 the slew rate set by R2 and R3. When the controller reaches the 12.5mV target, the drivers are disabled (DH\_ and DL\_ driven low), the reference is turned off, and the IC supply currents drop to 1µA (max).

When  a  fault  condition  activates  the  shutdown sequence (output undervoltage lockout or thermal shutdown), the protection circuitry sets the fault latch to prevent the controller from restarting. To clear the fault latch and reactivate the MAX17030, toggle SHDN or cycle VDD power.

## DPRSLPVR SW5 (2, 7), PSI SW5 (3, 6)

DPRSLPVR and PSI together determine the operating mode, as shown in Table 4. The MAX17030 is in pulseskipping mode during startup and in boot mode, and is forced into PWM mode during soft-shutdown.

## PGD\_IN, SW5 (4, 5)

PGD\_IN indicates the power status of other system rails and is used for power-supply sequencing. After powerup to the boot voltage, the output voltage remains at

## Table 3. Shutdown Mode ( SHDN )

| SW5 (1, 8)   | SHDN PIN          | MAX17030 OUTPUT                                                   |
|--------------|-------------------|-------------------------------------------------------------------|
| Off          | Connected to V3P3 | Output enabled-V OUT is selected by VID DAC code (D0-D6) settings |
| On           | Connected to GND  | Shutdown mode, V OUT = 0                                          |

## Table 4. DPRSLPVR, PSI

| DPRSLPVR SW5 (2, 7)   | PSI SW5 (3, 6)   | POWER LEVEL   | OPERATING MODE                                          |
|-----------------------|------------------|---------------|---------------------------------------------------------|
| On (VCCP)             | X                | Low current   | 1-phase pulse-skipping mode                             |
| Off (GND)             | On (GND)         | Intermediate  | 2-phase forced-PWM mode                                 |
| Off (GND)*            | Off (VCCP)*      | Full          | Normal operation-all phases are active, forced-PWM mode |

*Default position.

X = Don't care.

## Table 5. PGD\_IN

| SW5 (4, 5)   | PGD_IN PIN        | MAX17030 OUTPUT                                                               |
|--------------|-------------------|-------------------------------------------------------------------------------|
| Off          | Connected to GND  | V OUT remains at the boot voltage. CLKEN remains high, and PWRGD remains low. |
| On           | Connected to V3P3 | V OUT transitions to selected VID voltage, and CLKEN is pulled low.           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

VBOOT, CLKEN remains high, and PWRGD remains low as long as the PG\_DIN stays low. When PGD\_IN is pulled high, the output transitions to selected VID voltage, and CLKEN is  pulled  low.  If  the  system  pulls PGD\_IN low during normal operation, the MAX17030 immediately drives CLKEN high, pulls PWRGD low, and slews the output to the boot voltage (using 3-phase pulse-skipping mode). The controller remains at the boot voltage until PGD\_IN goes high again, SHDN is toggled, or the VDD is cycled.

## Evaluating the MAX17028 Circuit

The MAX17030 EV kit also demonstrates the highpower, dynamically adjustable, 1-phase MAX17028 Quick-PWM step-down VID power-supply controller. This DC-DC converter steps down high-voltage batteries  and/or  AC adapters, generating a precision, lowvoltage VCCAXG rail for Intel's GMCH graphics core. The MAX17028 circuit includes power-good signaling, voltage regulator thermal monitoring ( VRHOT ), and current monitor (DFGT\_IMON) output. The MAX17028 includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. An internal amplifier buffers the DAC and accurately controls the slew rate for all output-voltage transitions, including transitions between

## MAX17030 Evaluation Kit

VID codes, startup, and shutdown. Precision slew-rate control provides just-in-time arrival at the new DAC setting, minimizing surge currents to and from the battery.

The MAX17028 includes output undervoltage fault, overvoltage-fault protection, and thermal overload protection. It also includes a voltage regulator power-good (PWRGD) output.

The  output  voltage  (VCCAXG)  can  be  digitally adjustable from 0 to 1.5000V (7-bit on-board DAC) from a  7V  to  20V  battery  input  range.  It  delivers  up  to  14A output current. The MAX17028 circuit operates at 400kHz switching frequency and has superior line- and load-transient response.

## Setting the VCCAXG Output Voltage

The MAX17028 has an internal DAC that programs the VCCAXG output voltage. The output voltage is digitally set from 0 to 1.5000V (Table 6) using the D0-D6 pins.

When SW3 positions are off, the MAX17028's D0-D6 inputs are at logic 0 (connected to GND). When SW3 positions are on, D0-D6 inputs are at logic 1 (connected to VTT1). The output voltage can be changed during operation by activating SW3 on and off. As shipped, the EV kit is configured with SW3 positions set for 0.9000V output (SW3 (5, 10), SW3 (6, 9) and SW2 (1, 8) in the on positions) (Table 6). Refer to the MAX17028 IC data sheet for more information.

## Table 6. MAX17028 GMCH Output-Voltage Adjustment Settings

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
|    0 |    0 |    0 |    0 |    0 |    0 |    0 |               1.5000 |    1 |    0 |    0 |    0 |    0 |    0 |    0 |               0.7000 |
|    0 |    0 |    0 |    0 |    0 |    0 |    1 |               1.4875 |    1 |    0 |    0 |    0 |    0 |    0 |    1 |               0.6875 |
|    0 |    0 |    0 |    0 |    0 |    1 |    0 |               1.4750 |    1 |    0 |    0 |    0 |    0 |    1 |    0 |               0.6750 |
|    0 |    0 |    0 |    0 |    0 |    1 |    1 |               1.4625 |    1 |    0 |    0 |    0 |    0 |    1 |    1 |               0.6625 |
|    0 |    0 |    0 |    0 |    1 |    0 |    0 |               1.4500 |    1 |    0 |    0 |    0 |    1 |    0 |    0 |               0.6500 |
|    0 |    0 |    0 |    0 |    1 |    0 |    1 |               1.4375 |    1 |    0 |    0 |    0 |    1 |    0 |    1 |               0.6375 |
|    0 |    0 |    0 |    0 |    1 |    1 |    0 |               1.4250 |    1 |    0 |    0 |    0 |    1 |    1 |    0 |               0.6250 |
|    0 |    0 |    0 |    0 |    1 |    1 |    1 |               1.4125 |    1 |    0 |    0 |    0 |    1 |    1 |    1 |               0.6125 |
|    0 |    0 |    0 |    1 |    0 |    0 |    0 |               1.4000 |    1 |    0 |    0 |    1 |    0 |    0 |    0 |               0.6000 |
|    0 |    0 |    0 |    1 |    0 |    0 |    1 |               1.3875 |    1 |    0 |    0 |    1 |    0 |    0 |    1 |               0.5875 |
|    0 |    0 |    0 |    1 |    0 |    1 |    0 |               1.3750 |    1 |    0 |    0 |    1 |    0 |    1 |    0 |               0.5750 |
|    0 |    0 |    0 |    1 |    0 |    1 |    1 |               1.3625 |    1 |    0 |    0 |    1 |    0 |    1 |    1 |               0.5625 |
|    0 |    0 |    0 |    1 |    1 |    0 |    0 |               1.3500 |    1 |    0 |    0 |    1 |    1 |    0 |    0 |               0.5500 |
|    0 |    0 |    0 |    1 |    1 |    0 |    1 |               1.3375 |    1 |    0 |    0 |    1 |    1 |    0 |    1 |               0.5375 |
|    0 |    0 |    0 |    1 |    1 |    1 |    0 |               1.3250 |    1 |    0 |    0 |    1 |    1 |    1 |    0 |               0.5250 |
|    0 |    0 |    0 |    1 |    1 |    1 |    1 |               1.3125 |    1 |    0 |    0 |    1 |    1 |    1 |    1 |               0.5125 |
|    0 |    0 |    1 |    0 |    0 |    0 |    0 |               1.3000 |    1 |    0 |    1 |    0 |    0 |    0 |    0 |               0.5000 |
|    0 |    0 |    1 |    0 |    0 |    0 |    1 |               1.2875 |    1 |    0 |    1 |    0 |    0 |    0 |    1 |               0.4875 |
|    0 |    0 |    1 |    0 |    0 |    1 |    0 |               1.2750 |    1 |    0 |    1 |    0 |    0 |    1 |    0 |               0.4750 |
|    0 |    0 |    1 |    0 |    0 |    1 |    1 |               1.2625 |    1 |    0 |    1 |    0 |    0 |    1 |    1 |               0.4625 |
|    0 |    0 |    1 |    0 |    1 |    0 |    0 |               1.2500 |    1 |    0 |    1 |    0 |    1 |    0 |    0 |               0.4500 |
|    0 |    0 |    1 |    0 |    1 |    0 |    1 |               1.2375 |    1 |    0 |    1 |    0 |    1 |    0 |    1 |               0.4375 |
|    0 |    0 |    1 |    0 |    1 |    1 |    0 |               1.2250 |    1 |    0 |    1 |    0 |    1 |    1 |    0 |               0.4250 |
|    0 |    0 |    1 |    0 |    1 |    1 |    1 |               1.2125 |    1 |    0 |    1 |    0 |    1 |    1 |    1 |               0.4125 |
|    0 |    0 |    1 |    1 |    0 |    0 |    0 |               1.2000 |    1 |    0 |    1 |    1 |    0 |    0 |    0 |               0.4000 |
|    0 |    0 |    1 |    1 |    0 |    0 |    1 |               1.1875 |    1 |    0 |    1 |    1 |    0 |    0 |    1 |               0.3875 |
|    0 |    0 |    1 |    1 |    0 |    1 |    0 |               1.1750 |    1 |    0 |    1 |    1 |    0 |    1 |    0 |               0.3750 |
|    0 |    0 |    1 |    1 |    0 |    1 |    1 |               1.1625 |    1 |    0 |    1 |    1 |    0 |    1 |    1 |               0.3625 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

## Table 6. MAX17028 GMCH Output-Voltage Adjustment Settings (continued)

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 | OUTPUT VOLTAGE (V)   |   D6 |   D5 |   D4 |   D3 | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
|    0 |    0 |    1 |    1 |    1 |    0 |    0 | 1.1500               |    1 |    0 |    1 |    1 | 1    | 0    | 0    | 0.3500               |
|    0 |    0 |    1 |    1 |    1 |    0 |    1 | 1.1375               |    1 |    0 |    1 |    1 | 1    | 0    | 1    | 0.3375               |
|    0 |    0 |    1 |    1 |    1 |    1 |    0 | 1.1250               |    1 |    0 |    1 |    1 | 1    | 1    | 0    | 0.3250               |
|    0 |    0 |    1 |    1 |    1 |    1 |    1 | 1.1125               |    1 |    0 |    1 |    1 | 1    | 1    | 1    | 0.3125               |
|    0 |    1 |    0 |    0 |    0 |    0 |    0 | 1.1000               |    1 |    1 |    0 |    0 | 0    | 0    | 0    | 0.3000               |
|    0 |    1 |    0 |    0 |    0 |    0 |    1 | 1.0875               |    1 |    1 |    0 |    0 | 0    | 0    | 1    | 0.2875               |
|    0 |    1 |    0 |    0 |    0 |    1 |    0 | 1.0750               |    1 |    1 |    0 |    0 | 0    | 1    | 0    | 0.2750               |
|    0 |    1 |    0 |    0 |    0 |    1 |    1 | 1.0625               |    1 |    1 |    0 |    0 | 0    | 1    | 1    | 0.2625               |
|    0 |    1 |    0 |    0 |    1 |    0 |    0 | 1.0500               |    1 |    1 |    0 |    0 | 1    | 0    | 0    | 0.2500               |
|    0 |    1 |    0 |    0 |    1 |    0 |    1 | 1.0375               |    1 |    1 |    0 |    0 | 1    | 0    | 1    | 0.2375               |
|    0 |    1 |    0 |    0 |    1 |    1 |    0 | 1.0250               |    1 |    1 |    0 |    0 | 1    | 1    | 0    | 0.2250               |
|    0 |    1 |    0 |    0 |    1 |    1 |    1 | 1.0125               |    1 |    1 |    0 |    0 | 1    | 1    | 1    | 0.2125               |
|    0 |    1 |    0 |    1 |    0 |    0 |    0 | 1.0000               |    1 |    1 |    0 |    1 | 0    | 0    | 0    | 0.2000               |
|    0 |    1 |    0 |    1 |    0 |    0 |    1 | 0.9875               |    1 |    1 |    0 |    1 | 0    | 0    | 1    | 0.1875               |
|    0 |    1 |    0 |    1 |    0 |    1 |    0 | 0.9750               |    1 |    1 |    0 |    1 | 0    | 1    | 0    | 0.1750               |
|    0 |    1 |    0 |    1 |    0 |    1 |    1 | 0.9625               |    1 |    1 |    0 |    1 | 0    | 1    | 1    | 0.1625               |
|    0 |    1 |    0 |    1 |    1 |    0 |    0 | 0.9500               |    1 |    1 |    0 |    1 | 1    | 0    | 0    | 0.1500               |
|    0 |    1 |    0 |    1 |    1 |    0 |    1 | 0.9375               |    1 |    1 |    0 |    1 | 1    | 0    | 1    | 0.1375               |
|    0 |    1 |    0 |    1 |    1 |    1 |    0 | 0.9250               |    1 |    1 |    0 |    1 | 1    | 1    | 0    | 0.1250               |
|    0 |    1 |    0 |    1 |    1 |    1 |    1 | 0.9125               |    1 |    1 |    0 |    1 | 1    | 1    | 1    | 0.1125               |
|    0 |    1 |    1 |    0 |    0 |    0 |    0 | 0.9000               |    1 |    1 |    1 |    0 | 0    | 0    | 0    | 0.1000               |
|    0 |    1 |    1 |    0 |    0 |    0 |    1 | 0.8875               |    1 |    1 |    1 |    0 | 0    | 0    | 1    | 0.0875               |
|    0 |    1 |    1 |    0 |    0 |    1 |    0 | 0.8750               |    1 |    1 |    1 |    0 | 0    | 1    | 0    | 0.0750               |
|    0 |    1 |    1 |    0 |    0 |    1 |    1 | 0.8625               |    1 |    1 |    1 |    0 | 0    | 1    | 1    | 0.0625               |
|    0 |    1 |    1 |    0 |    1 |    0 |    0 | 0.8500               |    1 |    1 |    1 |    0 | 1    | 0    | 0    | 0.0500               |
|    0 |    1 |    1 |    0 |    1 |    0 |    1 | 0.8375               |    1 |    1 |    1 |    0 | 1    | 0    | 1    | 0.0375               |
|    0 |    1 |    1 |    0 |    1 |    1 |    0 | 0.8250               |    1 |    1 |    1 |    0 | 1    | 1    | 0    | 0.0250               |
|    0 |    1 |    1 |    0 |    1 |    1 |    1 | 0.8125               |    1 |    1 |    1 |    0 | 1    | 1    | 1    | 0.0125               |
|    0 |    1 |    1 |    1 |    0 |    0 |    0 | 0.8000               |    1 |    1 |    1 |    1 | 0    | 0    | 0    | 0                    |
|    0 |    1 |    1 |    1 |    0 |    0 |    1 | 0.7875               |    1 |    1 |    1 |    1 | 0    | 0    | 1    | 0                    |
|    0 |    1 |    1 |    1 |    0 |    1 |    0 | 0.7750               |    1 |    1 |    1 |    1 | 0    | 1    | 0    | 0                    |
|    0 |    1 |    1 |    1 |    0 |    1 |    1 | 0.7625               |    1 |    1 |    1 |    1 | 0    | 1    | 1    | 0                    |
|    0 |    1 |    1 |    1 |    1 |    0 |    0 | 0.7500 0.7375        |    1 |    1 |    1 |    1 | 1 1  | 0 0  | 0 1  | 0 0                  |
|    0 |    1 |    1 |    1 |    1 |    0 |    1 |                      |    1 |    1 |    1 |    1 |      |      |      |                      |
|    0 |    1 |    1 |    1 |    1 |    1 |    0 | 0.7250               |    1 |    1 |    1 |    1 | 1    | 1    | 0    | 0                    |
|    0 |    1 |    1 |    1 |    1 |    1 |    1 | 0.7125               |    1 |    1 |    1 |    1 | 1    | 1    | 1    | 0                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

## Table 7. MAX17028 Operating Mode Truth Table

X = Don't care.

| INPUTS          | INPUTS              | INPUTS   | STATE                                            |                                                                                                                                                                                                                                                     |
|-----------------|---------------------|----------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW2 (1, 8) | DPRSLPVR SW2 (2, 7) | PGD_IN   | STATE                                            | OPERATING MODE                                                                                                                                                                                                                                      |
| Low             | X                   | X        | Disabled                                         | Low-Power Shutdown Mode. DL forced low, and the controller is disabled. The controller's bias supply current drops to 15µA (typ).                                                                                                                   |
| High            | Low                 | High     | 1-phase forced-PWM 1/2 R TIME slew rate          | Full Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6).                                                                                                                                                          |
| High            | High                | High     | 1-phase pulse- skipping nominal R TIME slew rate | Skip Mode. The no-load output voltage is determined by the selected VID DAC code (D0-D6). When DPRSLPVR is pulled high, the MAX17028 immediately enters 1-phase pulse- skipping operation, allowing automatic PWM/PFM switchover under light loads. |
| Falling         | X                   | X        | 1-phase forced-PWM 1/8 R TIME slew rate          | Shutdown. When SHDN is pulled low, the MAX17028 immediately pulls PWRGD low and the output voltage is ramped down to ground. Once the output reaches 0V, the controller enters the low-power shutdown state.                                        |

## Switch SW2 Settings

Switch SW2 controls the MAX17028 operating modes (Table 7).

## Evaluating the MAX17000 Circuit

The MAX17030 kit also demonstrates the MAX17000 DDR memory power-solution circuit. The MAX17000 provides the regulated voltages required in a complete DDR memory system. The MAX17000 generates the main  memory  voltage  (VCCDDR),  the  tracking sinking/sourcing termination voltage (VTTDDR), and the reference voltage (VTTR). The MAX17000 circuit operates at 400kHz switching frequency, generates a preset 1.5V VCCDDR main memory voltage that is capable of sourcing 10A from 7V to 20V battery input range. The termination regulator provides a 0.75V VTTDDR supply that is capable of sinking/sourcing 2A. The termination reference buffer provides a 0.75V VTTR supply that is capable of sinking/sourcing 3mA.

## Setting the VCCDDR Output Voltage

The MAX17000 feedback input (FB) is connected to a network of resistors, which set the VCCDDR output voltage. By default, the output voltage is preset to a fixed 1.5V output (R120 = 0 Ω ).  For  a  fixed  1.8V  output, remove R120 and install a short across resistor R99. For an adjustable VCCDDR output (1V to 2.7V), connect FB to resistive divider R119 and R120 from the output voltage VCCDDR. Install feedback resistors with values according to the following equation:

<!-- formula-not-decoded -->

where VFB = 1V. Use 10k Ω for  R120, and calculate R119 for the desired VCCDDR output voltage.

## MAX17000 Standby Control Input ( STDBY ) and Shutdown Control Input ( SHDN )

The MAX17000 features independent standby and shutdown controls by implementing switches SW4 (4, 5)  and SW4 (3, 6) to control the STDBY and SHDN inputs, respectively. Switches SW4 (4, 5) and SW4 (3, 6) allow flexible sequencing to support all DDR operating states. The shutdown and standby control logic is illustrated in Table 8.

## Table 8. SW4 (4, 5) ( STDBY ) and SW4 (3, 6) ( SHDN ) Functions

| SW4 (4, 5) ( STDBY )   | SW4 (3, 6) ( SHDN )   | VCCDDR OUTPUT   | VTTDDR   | VTTR     |
|------------------------|-----------------------|-----------------|----------|----------|
| X                      | Off                   | Disabled        | Disabled | Disabled |
| On                     | On                    | Enabled         | Enabled  | Enabled  |
| Off                    | On                    | Enabled         | Disabled | Enabled  |

X = Don't care.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

## Evaluating the MAX17007A Circuit

The MAX17030 kit also demonstrates the MAX17007A I/O power solution circuit.

This DC-DC converter steps down high-voltage batteries  to  generate  low-voltage  core  or  chipset/RAM bias supplies in notebook computers. The MAX17007A circuit generates two independent I/O voltages (VTT1 and VTT2) from a 7V to 20V battery-input range. VTT1 and VTT2 are configured for 1.1V output voltages. Each output delivers up to 12A. The VTT1 and VTT2 outputs operate at 270kHz and 330kHz switching frequencies, respectively. Both outputs can be configured for other voltages by changing R140, R141, R152, and R153 values. Refer to the MAX17007A IC data sheet for more details.

## Table 9. Switch SW4 (1, 8) Functions

| SW4 (1, 8)   | EN1 PIN                       | VTT1 OUTPUT              |
|--------------|-------------------------------|--------------------------|
| On           | Connected to V3P3             | Enabled, VTT1 = 1.1V     |
| Off          | Connected to GND through R144 | Shutdown mode, VTT1 = 0V |

<!-- image -->

The outputs can also be combined to operate as a 2phase, high-current, single-output regulator. In this mode, the output is configured for either a preset, adjustable, or dynamically adjustable output voltage using REFIN1. Refer to the Combined-Mode Operation (FB2 = VCC) section in the IC MAX17007A data sheet for more details.

The MAX17007A provides access to the device's enable control pins (EN1 and EN2), through SW4 switches SW4 (1, 8) and SW4 (2, 7), respectively. EN1 is used to control the VTT1 output and EN2 is used to control the VTT2 output. When in combined mode, EN1 is used for output control and EN2 must be connected to GND. Tables 9 and 10 list the options for each output-enable pin.

## Table 10. Switch SW4 (2, 7) Functions

| SW4 (2, 7)   | EN2 PIN                       | VTT2 OUTPUT              |
|--------------|-------------------------------|--------------------------|
| On           | Connected to V3P3             | Enabled, VTT2 = 1.1V     |
| Off          | Connected to GND through R155 | Shutdown mode, VTT2 = 0V |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 1a. MAX17030 EV Kit Schematic (Sheet 1 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

<!-- image -->

Figure 1b. MAX17030 EV Kit Schematic (Sheet 2 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 1c. MAX17030 EV Kit Schematic (Sheet 3 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

<!-- image -->

Figure 1d. MAX17030 EV Kit Schematic (Sheet 4 of 5)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

<!-- image -->

Figure 2. MAX17030 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 3. MAX17030 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

<!-- image -->

Figure 4. MAX17030 EV Kit PCB Layout-Internal Layer 2 (PGND Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 5. MAX17030 EV Kit PCB Layout-Internal Layer 3 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

<!-- image -->

Figure 6. MAX17030 EV Kit PCB Layout-Internal Layer 4 (AGND/PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 7. MAX17030 EV Kit PCB Layout -Internal Layer 5 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

<!-- image -->

Figure 8. MAX17030 EV Kit PCB Layout -Internal Layer 6 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 9. MAX17030 EV Kit PCB Layout -Internal Layer 7 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17030 Evaluation Kit

<!-- image -->

Figure 10. MAX17030 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17030 Evaluation Kit

Figure 11. MAX17030 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

28

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER