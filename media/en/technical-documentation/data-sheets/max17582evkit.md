<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17582 Evaluation Kit

## General Description

## Features

The MAX17582 evaluation kit (EV kit) demonstrates the high-power,  dynamically  adjustable,  multiphase  IMVP6.5  notebook  CPU  application  circuit.  This  DC-DC converter  steps  down  high-voltage  batteries  and/or AC adapters, generating a precision,  low-voltage  CPU core  VCC  rail.  The  MAX17582  EV  kit  meets  the  Intel mobile  IMVP-6.5  CPU's  transient  voltage  specification, power-good  signaling,  voltage  regulator  thermal  monitoring ( VRHOT ), and power-good output (PWRGD). The MAX17582  EV  kit  consists  of  the  MAX17582  2-phase interleaved  Quick-PWM K step-down  controller.  The MAX17582  EV  kit  includes  active  voltage  positioning with  adjustable  gain,  reducing  power  dissipation,  and bulk output capacitance requirements. A slew-rate controller  allows  controlled  transitions  between VID codes, controlled  soft-start  and  shutdown,  and  controlled  exit suspend  voltage.  Precision  slew-rate  control  provides 'just-in-time' arrival at the new DAC setting, minimizing surge currents to and from the battery.

Two  dedicated  system  inputs  ( PSI and  DPRSLPVR) dynamically select  the  operating  mode  and  number  of active  phases,  optimizing  the  overall  efficiency  during the CPU's active and sleep states.

The  MAX17582  includes  latched-output  undervoltagefault, overvoltage-fault, and thermal-overload protection. It also includes a voltage regulator power-good (PWRGD) output, a clock enable ( CLKEN ) output, a current monitor output (IMON), and a phase-good (PHASEGD) output.

This fully assembled and tested circuit board provides a digitally adjustable 0 to 1.5000V output voltage (7-bit onboard DAC) from a 7V to 24V battery input range. Each phase  is  designed  for  a  20A  thermal  design  current, and delivers up to 30A peak output current for a total of 60A. The MAX17582 EV kit operates at 300kHz switching frequency (per phase) and has superior line- and loadtransient response.

Quick-PWM is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- S Dual-Phase, Fast-Response Interleaved, QuickPWM
- S Intel IMVP-6.5 Code-Set Compliant (Calpella Socket Configuration)
- S Dynamic Phase Selection Optimizes Active/Sleep Efficiency
- S Transient Phase Overlap Reduces Output Capacitance
- S Active Voltage Positioning with Adjustable Gain
- S High Speed, Accuracy, and Efficiency
- S Low Bulk Output Capacitor Count
- S 7V to 24V Input-Voltage Range
- S 0 to 1.5000V Output-Voltage Range (7-Bit DAC)
- S 60A Peak Load-Current Capability (30A Each Phase)
- S Accurate Current Balance and Current Limit
- S 300kHz Switching Frequency (per Phase)
- S Power-Good (PWRGD) and Phase-Good (PHASEGD) Outputs and Indicators
- S Clock Enable ( CLKEN ) and Thermal Fault ( VRHOT ) Outputs and Indicators
- S Current Monitor (IMON) Output
- S Undervoltage Fault Protections
- S 48-Pin Thin QFN Package with an Exposed Pad
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17582EVKIT+ | EV Kit |

1

## MAX17582 Evaluation Kit

## Component List

| DESIGNATION                                                                               |   QTY | DESCRIPTION                                                                                                                                                            |
|-------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLKEN , DPRSLPVR, GND_SENSE, IMON, PGDIN, PHASEGD, PSI , PWRGD, V3P3, VOUT_SENSE, VRHOT , |    12 | Test points                                                                                                                                                            |
| C1-C4                                                                                     |     4 | 10 F F Q 20%, 25V X5R ceramic capacitors (1210) Murata Electronics GRM32DR61E106KA12L TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM KEMET C1210C106M3RAC |
| C5, C7, C8                                                                                |     3 | 330 F F, 2V, 4.5m I low-ESR polymer capacitors (D case) Panasonic EEFSX0D331E4 or NEC TOKIN PSGV0E337M4.5 KEMET T520V337M2R5ATE4R5                                     |
| C6                                                                                        |     0 | Not installed, capacitor (D case)                                                                                                                                      |
| C9                                                                                        |     0 | Not installed, capacitor (0805)                                                                                                                                        |
| C10, C11                                                                                  |     2 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K Taiyo Yuden EMK107BJ683MA Murata GRM188R61C105K                                                      |
| C12, C21, C22, C24, C25                                                                   |     0 | Not installed, capacitors (0603)                                                                                                                                       |
| C13, C14                                                                                  |     2 | 0.22 F F Q 20%, 10V X7R ceramic capacitors (0603) Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT                                                        |
| C15, C16                                                                                  |     2 | 2200pF Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H222K or Murata GRM188R71H222K                                                                            |

| DESIGNATION             |   QTY | DESCRIPTION                                                                                                       |
|-------------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C17, C18, C19, C23, C26 |     5 | 1000pF Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K                       |
| C20                     |     1 | 0.1 F F Q 10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K                       |
| C27                     |     0 | Not installed, capacitor-short (PC trace) (0603)                                                                  |
| C30-C39, C60-C67        |    18 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT |
| C40-C59                 |    20 | 22 F F, 6.3V X5R ceramic capaci- tors (0805) TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG                        |
| D1, D2                  |     2 | 3A, 30V Schottky diodes Nihon EC31QS03L Central Semi CMSH3-40M                                                    |
| D3-D6                   |     4 | Green clear SMD LEDs (0805) Lite-On LTST-C170GKT Digi-Key 160-1179-1-ND                                           |
| JU1                     |     0 | Not installed, 3-pin header                                                                                       |
| L1, L2                  |     2 | 0.36 F H, 36A, 0.82m I power inductors Panasonic ETQP4LR36ZFC NEC TOKIN MPC1055LR36 TOKO FDUE1040D-R36M           |
| N1, N2                  |     2 | n-channel MOSFETs (PowerPAK 8 SO) Fairchild FDS6298 (SO 8) Vishay (Siliconix) SI4386DY                            |
| N3-N6                   |     4 | n-channel MOSFETs (PowerPAK 8 SO) Fairchild FDS8670 (SO 8) Vishay (Siliconix) SI4626ADY                           |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION                     |   QTY | DESCRIPTION                                                                            |
|---------------------------------|-------|----------------------------------------------------------------------------------------|
| N7                              |     0 | Not installed, n-channel MOSFET (DPAK)                                                 |
| R1, R9, R13, R15, R16, R43, R44 |     7 | 10 I Q 5% resistors (0603)                                                             |
| R2                              |     1 | 59k I Q 1% resistor (0603)                                                             |
| R3                              |     1 | 12.1k I Q 1% resistor (0603)                                                           |
| R4                              |     1 | 200k I Q 1% resistor (0603)                                                            |
| R5, R6                          |     2 | 0 I resistors (0603)                                                                   |
| R7, R11                         |     2 | 0.001 I Q 1%, 1W resistors (2512) Panasonic ERJM1WTF1M0U                               |
| R8, R12                         |     2 | 100 I Q 5% resistors (0603)                                                            |
| R17                             |     1 | 3.24k I Q 1% resistor (0603)                                                           |
| R18, R34, R35, R45              |     0 | Not installed, resistors (0603) R18 and R45 are open; R34 and R35 are short (PC trace) |
| R19                             |     1 | 51 I Q 5% resistor (0603)                                                              |
| R20                             |     0 | Not installed, 1W resistor (2512)                                                      |
| R21-R24, R30                    |     5 | 1k I Q 5% resistors (0603)                                                             |

| DESIGNATION                      |   QTY | DESCRIPTION                                                                          |
|----------------------------------|-------|--------------------------------------------------------------------------------------|
| R25                              |     1 | 13k I Q 1% resistor (0603)                                                           |
| R26                              |     1 | 100k I Q 5% NTC thermistor, A = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J |
| R27, R28, R29, R31, R32, R36-R42 |    12 | 100k I Q 5% resistors (0603)                                                         |
| R33                              |     1 | 6.34k I Q 1% resistor (0603)                                                         |
| SW1                              |     1 | 7-position, low-profile DIP switch                                                   |
| SW2                              |     1 | 5-position, low-profile DIP switch                                                   |
| U1                               |     1 | 2-phase Quick-PWM VID controller (48 TQFN-EP*) Maxim MAX17582GTM+                    |
| U2                               |     1 | CPU socket rPGA-989                                                                  |
| -                                |     1 | PCB: MAX17582 EVALUATION KIT+                                                        |

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
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX17582 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17582 Evaluation Kit

## Quick Start

## Recommended Equipment

## Detailed Description of Hardware

This  60A  peak  multiphase  buck-regulator  design  is optimized for a 300kHz switching frequency (per phase) and  output-voltage  settings  around  1V.  At  VOUT  =  1V and VIN = 12V, the inductor ripple is approximately 35% (LIR = 0.35). The MAX17582 controller interleaves all the active  phases,  resulting  in  out-of-phase  operation  that minimizes  the  input  and  output  filtering  requirements. The  multiphase  controller  shares  the  current  between two  phases  that  operate  180 N out-of-phase,  supplying up to 30A per phase.

## Setting the Output Voltage

The MAX17582 has an internal digital-to-analog converter  (DAC) that programs the output voltage. The output voltage can be digitally set from 0 to 1.5000V (Table 2) from the D0-D6 pins. There are two different ways of setting the output voltage:

- 1) Drive the external VID0-VID6 inputs (all SW1 positions  are  off). The  output  voltage  is  set  by  driving VID0-VID6  with  open-drain  drivers  (pullup  resistors are  included  on  the  board)  or  3V/5V  CMOS  output logic levels.
- 2) Switch  SW1. When  SW1  positions  are  off,  the MAX17582's D0-D6 inputs are at logic 1 (connected to VDD). When SW1 positions are on, D0-D6 inputs are at logic 0 (connected to GND). The output voltage can be changed during operation by activating SW1 on and off. As shipped, the EV kit is configured with SW1 positions set for 0.9750V output (Table 2). Refer to the MAX17582 IC data sheet for more information.

## Procedure

The  MAX17582  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)  Ensure that the circuit is connected correctly to the supplies  and  dummy  load  prior  to  applying  any power.
- 2)  Verify  that  all  positions  of  switch  SW2  are  off.  The DAC code settings (D6-D0) are set by switch SW1. Set SW1 (1, 14), SW1 (3, 12), SW1 (5, 10), and SW1 (7, 8) to the on positions. The output voltage is set for 0.9750V.
- 3)  Turn  on  the  battery  power  before  turning  on  the  5V bias power.
- 4)  Observe  the  0.9750V  output  voltage  with  the  DMM and/or oscilloscope. Look at the LX switching nodes and  MOSFET  gate-drive  signals  while  varying  the load current.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX17582	EV	kit
- 7V	 to	 24V,	 &gt;	 100W	 power	 supply,	 battery,	 or	 note -book AC adapter
- DC	bias	power	supply,	5V	at	1A
- Dummy	load	capable	of	sinking	60A
- Digital	multimeters	(DMMs)
- 100MHz	dual-trace	oscilloscope

## MAX17582 Evaluation Kit

Table 1. MAX17582 Operating Mode Truth Table

| INPUTS           | INPUTS          | INPUTS              | INPUTS         | PHASE OPERATION*                                | OPERATING MODE                                                                                                                                                                                                                                                                                                                                                                   |
|------------------|-----------------|---------------------|----------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SHDN SW2 (1, 10) | SLOW SW2 (5, 6) | DPRSLPVR SW2 (2, 9) | PSI SW2 (3, 8) | PHASE OPERATION*                                | OPERATING MODE                                                                                                                                                                                                                                                                                                                                                                   |
| GND              | X               | X                   | X              | Disabled                                        | Low-Power Shutdown Mode. DL1 and DL2 are forced low and the controller is disabled. The supply current drops to 1 F A (max).                                                                                                                                                                                                                                                     |
| Rising           | X               | X                   | X              | Multiphase pulse-skip- ping 1/8 RTIME slew rate | Startup/Boot. When SHDN is pulled high, the MAX17582 begins the startup sequence. The controller enables the PWM controller and ramps the output voltage up to the boot voltage.                                                                                                                                                                                                 |
| High             | High            | Low                 | High           | Multiphase forced-PWM normal RTIME slew rate    | Full Power. The no-load output voltage is determined by the selected VID DAC code (D0-D6, Table 2).                                                                                                                                                                                                                                                                              |
| High             | High            | Low                 | Low            | 1-phase forced-PWM normal RTIME slew rate       | Intermediate Power. The no-load output voltage is deter- mined by the selected VID DAC code (D0-D6, Table 2). When PSI is pulled low, the MAX17582 immediately disables phase 2. DH2 and DL2 are pulled low.                                                                                                                                                                     |
| High             | High            | High                | X              | 1-phase pulse-skip- ping normal RTIME slew rate | Deeper Sleep Mode. The no-load output voltage is deter- mined by the selected VID DAC code (D0-D6, Table 2). When DPRSLPVR is pulled high, the MAX17582 immedi- ately enters 1-phase pulse-skipping operation allowing automatic PWM/PFM switchover under light loads. The PWRGD and CLKEN upper thresholds are blanked during downward transitions. DH2 and DL2 are pulled low. |
| High             | Low             | X                   | X              | 1/2 RTIME slew rate                             | When SLOW is pulled low during any normal operating mode, the slew rate is changed to half of the normal value set by RTIME .                                                                                                                                                                                                                                                    |
| Falling          | X               | X                   | X              | Multiphase forced-PWM 1/8 RTIME slew rate       | Shutdown. When SHDN is pulled low, the MAX17582 immediately pulls PWRGD and PHASEGD low, CLKEN becomes high impedance, all enabled phases are activated, and the output voltage is ramped down to ground. Once the output reaches 0V, the controller enters the low-power shutdown state.                                                                                        |
| High             | X               | X                   | X              | Disabled                                        | Fault Mode. The fault latch has been set by the MAX17582 UVP or thermal-shutdown protection. The con- troller remains in fault mode until VCC power is cycled or SHDN toggled.                                                                                                                                                                                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17582 Evaluation Kit

## Table 2. MAX17582 IMVP-6.5 Output-Voltage VID DAC Codes

| D6   | D5   | D4   | D3   | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   | D6   | D5   | D4   | D3   | D2   | D1   | D0   | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
| 0    | 0    | 0    | 0    | 0    | 0    | 0    | 1.5000               | 1    | 0    | 0    | 0    | 0    | 0    | 0    | 0.7000               |
| 0    | 0    | 0    | 0    | 0    | 0    | 1    | 1.4875               | 1    | 0    | 0    | 0    | 0    | 0    | 1    | 0.6875               |
| 0    | 0    | 0    | 0    | 0    | 1    | 0    | 1.4750               | 1    | 0    | 0    | 0    | 0    | 1    | 0    | 0.6750               |
| 0    | 0    | 0    | 0    | 0    | 1    | 1    | 1.4625               | 1    | 0    | 0    | 0    | 0    | 1    | 1    | 0.6625               |
| 0    | 0    | 0    | 0    | 1    | 0    | 0    | 1.4500               | 1    | 0    | 0    | 0    | 1    | 0    | 0    | 0.6500               |
| 0    | 0    | 0    | 0    | 1    | 0    | 1    | 1.4375               | 1    | 0    | 0    | 0    | 1    | 0    | 1    | 0.6375               |
| 0    | 0    | 0    | 0    | 1    | 1    | 0    | 1.4250               | 1    | 0    | 0    | 0    | 1    | 1    | 0    | 0.6250               |
| 0    | 0    | 0    | 0    | 1    | 1    | 1    | 1.4125               | 1    | 0    | 0    | 0    | 1    | 1    | 1    | 0.6125               |
| 0    | 0    | 0    | 1    | 0    | 0    | 0    | 1.4000               | 1    | 0    | 0    | 1    | 0    | 0    | 0    | 0.6000               |
| 0    | 0    | 0    | 1    | 0    | 0    | 1    | 1.3875               | 1    | 0    | 0    | 1    | 0    | 0    | 1    | 0.5875               |
| 0    | 0    | 0    | 1    | 0    | 1    | 0    | 1.3750               | 1    | 0    | 0    | 1    | 0    | 1    | 0    | 0.5750               |
| 0    | 0    | 0    | 1    | 0    | 1    | 1    | 1.3625               | 1    | 0    | 0    | 1    | 0    | 1    | 1    | 0.5625               |
| 0    | 0    | 0    | 1    | 1    | 0    | 0    | 1.3500               | 1    | 0    | 0    | 1    | 1    | 0    | 0    | 0.5500               |
| 0    | 0    | 0    | 1    | 1    | 0    | 1    | 1.3375               | 1    | 0    | 0    | 1    | 1    | 0    | 1    | 0.5375               |
| 0    | 0    | 0    | 1    | 1    | 1    | 0    | 1.3250               | 1    | 0    | 0    | 1    | 1    | 1    | 0    | 0.5250               |
| 0    | 0    | 0    | 1    | 1    | 1    | 1    | 1.3125               | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 0.5125               |
| 0    | 0    | 1    | 0    | 0    | 0    | 0    | 1.3000               | 1    | 0    | 1    | 0    | 0    | 0    | 0    | 0.5000               |
| 0    | 0    | 1    | 0    | 0    | 0    | 1    | 1.2875               | 1    | 0    | 1    | 0    | 0    | 0    | 1    | 0.4875               |
| 0    | 0    | 1    | 0    | 0    | 1    | 0    | 1.2750               | 1    | 0    | 1    | 0    | 0    | 1    | 0    | 0.4750               |
| 0    | 0    | 1    | 0    | 0    | 1    | 1    | 1.2625               | 1    | 0    | 1    | 0    | 0    | 1    | 1    | 0.4625               |
| 0    | 0    | 1    | 0    | 1    | 0    | 0    | 1.2500               | 1    | 0    | 1    | 0    | 1    | 0    | 0    | 0.4500               |
| 0    | 0    | 1    | 0    | 1    | 0    | 1    | 1.2375               | 1    | 0    | 1    | 0    | 1    | 0    | 1    | 0.4375               |
| 0    | 0    | 1    | 0    | 1    | 1    | 0    | 1.2250               | 1    | 0    | 1    | 0    | 1    | 1    | 0    | 0.4250               |
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
| 0    | 1    | 0    | 0    | 1    | 0 0  | 0 1  | 1.0500               | 1    | 1    | 0    | 0 0  | 1 1  | 0 0  | 0    | 0.2500               |
| 0 0  | 1 1  | 0 0  | 0 0  | 1 1  |      |      | 1.0375               | 1    | 1    | 0    | 0    | 1    | 1    | 1 0  | 0.2375               |
| 0    | 1    | 0    | 0    | 1    | 1 1  | 0    | 1.0250               | 1    | 1    | 0    | 0    |      | 1    | 1    | 0.2250 0.2125        |
| 0    | 1    | 0    | 1    | 0    |      | 1 0  | 1.0125 1.0000        | 1 1  | 1 1  | 0 0  | 1    | 1 0  | 0    | 0    | 0.2000               |
| 0    | 1    | 0    | 1    | 0    | 0    | 1    | 0.9875               | 1    | 1    | 0    | 1    | 0    | 0    | 1    | 0.1875               |
|      |      |      |      |      | 0    |      |                      |      |      |      |      |      |      |      |                      |

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

Table 2. MAX17582 IMVP-6.5 Output-Voltage VID DAC Codes (continued)

|   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 | OUTPUT VOLTAGE (V)   |
|------|------|------|------|------|------|------|----------------------|------|------|------|------|------|------|------|----------------------|
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

The  MAX17582  includes  a  transconductance  amplifier for  adding  gain  to  the  voltage-positioning  sense  path. The  amplifier's  input  is  generated  by  summing  the current-sense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's  output  connects  to  the  voltage-positioned feedback input (FBAC), so the resistance between FBAC and VOUT (R17) determines the voltage-positioning gain. Resistor  R17  (3.24k I )  provides  a  -1.9mV/A  voltagepositioning  slope  at  the  output  when  all  phases  are active. Remote output and ground sensing eliminate any additional PCB voltage drops.

<!-- image -->

## Dynamic Output-Voltage Transition Experiment

This MAX17582 EV kit is set to transition the output voltage  at  6.25mV/ F s  ( SLOW =  GND).  The  speed  of  the transition is altered by scaling resistors R2 and R3.

During the voltage transition, watch the inductor current by looking at the current-sense inputs with a differential scope  probe.  Observe  the  low,  well-controlled  inductor  current  that  accompanies  the  voltage  transition. Slew-rate control during shutdown and startup results in well-controlled currents into and out of the battery (input source).

There are two methods to create an output-voltage transition. Select D0-D6 (SW1). Then either manually change the SW1 settings to a new VID code setting (Table 2), or disable all SW1 settings and drive the VID0-VID6 PCB test points externally to the desired code settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17582 Evaluation Kit

## Load-Transient Experiment

One  interesting  experiment  is  to  subject  the  output  to large,  fast  load  transients  and  observe  the  output  with an oscilloscope. Accurate measurement of output ripple and  load-transient  response  invariably  requires  that ground clip leads be completely avoided and the probe removed to expose the GND shield, so the probe can be directly grounded with as short a wire as possible to the board. Otherwise, EMI and noise pickup corrupt the waveforms.

Most  benchtop  electronic  loads  intended  for  powersupply  testing  lack  the  ability  to  subject  the  DC-DC converter to ultra-fast load transients. Emulating the supply current (di/dt) at the IMVP-6.5 VCORE pins requires at  least  500A/ F s  load  transients.  One  easy  method  for generating such an abusive load transient is to install a power MOSFET at the N7 location and install resistor R20 between 5m I and 10m I to monitor the transient current. Then drive its gate (TP1) with a strong pulse generator at a low duty cycle (&lt; 5%) to minimize heat stress in the MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy-load MOSFET. To determine how much load current particular pulse-generator amplitude is  causing, observe the current through inductor L1. In the  buck  topology,  the  load  current  is  approximately equal to the average value of the inductor current.

Note: CPU socket is based on the Calpella platform pin configuration.

Table 3. Shutdown Mode ( SHDN )

| SW2 (1, 10)   | SHDN PIN         | MAX17582 OUTPUT                                                   |
|---------------|------------------|-------------------------------------------------------------------|
| Off           | Connected to VDD | Output enabled-V OUT is selected by VID DAC code (D0-D6) settings |
| On            | Connected to GND | Shutdown mode, V OUT = 0V                                         |

## Switch SW2 Settings

## Shutdown SW2 (1, 10)

When SHDN goes low (SW2 (1, 10) = on), the MAX17582 enters the low-power shutdown mode. PWRGD is pulled low immediately, and the output voltage ramps down at 1/8 the slew rate set by R2 and R3 (71.1k I ). When the controller reaches the 0V target, the drivers are disabled (DL1 and DL2 driven high), the reference is turned off, and the IC supply currents drop to 1 F A (max).

When a fault condition activates the shutdown sequence (output undervoltage lockout or thermal shutdown), the protection circuitry sets the fault latch to prevent the controller from restarting. To clear the fault latch and reactivate the MAX17582, toggle SHDN or cycle VDD power.

## DPRSLPVR SW2 (2, 9), PSI SW2 (3, 8)

DPRSLPVR  and PSI together  determine  the  operating mode,  as  shown  in  Table  4.  The  MAX17582  is  forced into full-phase PWM mode during startup, while in boot mode, during the transition from boot mode to VID mode, and during shutdown.

## Table 4. DPRSLPVR, PSI

| DPRSLPVR SW2 (2, 9)   | PSI SW2 (3, 8)   | POWER LEVEL   | OPERATING MODE                                             |
|-----------------------|------------------|---------------|------------------------------------------------------------|
| On (VDD)              | X                | Low current   | 1-phase pulse- skipping mode                               |
| Off (GND)             | On (GND)         | Intermediate  | 1-phase forced- PWM mode                                   |
| Off (GND)*            | Off (VDD)*       | Full          | Normal opera- tion-all phases are active, forced- PWM mode |

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

## SLOW , SW2 (5, 6)

This 1V logic input signal selects between the nominal and 'slow' (half of nominal rate) slew rates. When SLOW is forced high, the selected nominal slew rate is set by the TIME resistance. When SLOW is forced low, the slew rate is reduced to half of the nominal slew rate.

## PGDIN, SW2 (4, 7)

PGDIN indicates the power status of other system rails and is used for power-supply sequencing. After powerup  to  the  boot  voltage,  the  output  voltage  remains  at

## Table 5. SLOW

| SW2 (5, 6)   | SLOW PIN         | MAX17582                                              |
|--------------|------------------|-------------------------------------------------------|
| Off          | Connected to VDD | Nominal slew rate is set by R2 and R3                 |
| On*          | Connected to GND | Slew rate is reduced to half of the nominal slew rate |

<!-- image -->

VBOOT, CLKEN remains high, and PWRGD remains low as long as the PGDIN stays low. When PGDIN is pulled high, the output transitions to selected VID voltage, and CLKEN is pulled low. If the system pulls PGDIN low during normal operation, the MAX17582 immediately drives CLKEN high, pulls PWRGD low, and slews the output to the boot voltage (using 2-phase pulse-skipping mode). The controller  remains  at  the  boot  voltage  until  PGDIN goes high again, SHDN is toggled, or the VDD is cycled.

## Table 6. PGDIN

| SW2 (4, 7)   | PGDIN PIN        | MAX17582 OUTPUT                                                                 |
|--------------|------------------|---------------------------------------------------------------------------------|
| Off          | Connected to GND | V OUT remains at the boot volt- age. CLKEN remains high, and PWRGD remains low. |
| On*          | Connected to VDD | V OUT transitions to selected VID voltage, and CLKEN is pulled low.             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX17582 Evaluation Kit

Figure 1a. MAX17582 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

<!-- image -->

Figure 1b. MAX17582 EV Kit Schematic (Sheet 2 of 2)

## Evaluates:  MAX17582

## MAX17582 Evaluation Kit

Figure 2. MAX17582 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX17582 EV Kit PCB Layout-Component Side

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

Figure 4. MAX17582 EV Kit PCB Layout-Internal Layer 2 (VBATT/PGND Plane)

<!-- image -->

<!-- image -->

Figure 5. MAX17582 EV Kit PCB Layout-Internal Layer 3 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX17582 Evaluation Kit

Figure 6. MAX17582 EV Kit PCB Layout-Internal Layer 4 (PGND Layer)

<!-- image -->

Figure 7. MAX17582 EV Kit PCB Layout-Internal Layer 5 (AGND/PGND Layer)

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17582 Evaluation Kit

Figure 8. MAX17582 EV Kit PCB Layout-Internal Layer 6 (Signal Layer)

<!-- image -->

<!-- image -->

Figure 9. MAX17582 EV Kit PCB Layout-Internal Layer 7 (PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX17582 Evaluation Kit

## Evaluates:  MAX17582

Figure 10. MAX17582 EV Kit PCB Layout-Solder Side

<!-- image -->

16

Figure 11. MAX17582 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600