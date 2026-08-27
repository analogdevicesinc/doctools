<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX17409 Evaluation Kit

## General Description

## Features

The MAX17409 evaluation kit (EV kit) demonstrates the high-power,  dynamically  adjustable,  1-phase  application  circuit  for  NVIDIA ®   graphics  power  supplies.  This DC-DC converter is intended to either step down highvoltage batteries and/or the 5V system supply, generating  a  precision,  low-voltage  CPU  core.  The  MAX17409 EV kit meets the NVIDIA transient voltage specification, power-good  signaling,  voltage-regulator  thermal  monitoring ( VRHOT ),  and power-good output (PWRGD). The MAX17409 EV kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output-capacitance requirements. An internal amplifier buffers the DAC and accurately controls the slew rate for all output-voltage  transitions,  including  transitions  between VID  codes,  startup,  and  shutdown.  Precision  slew-rate control provides just-in time arrival at the new DAC setting, minimizing surge currents to and from the battery.

The MAX17409 includes output undervoltage fault, overvoltage  fault,  and  thermal  overload  protection.  It  also includes a voltage-regulator power-good (PWRGD) output.

This  fully  assembled  and  tested  PCB  provides  a  digitally adjustable 0.3375V to 1.1250V output voltage (6-bit on-board DAC) from a 7V to 24V battery-input range. It delivers up to 14A output current. The EV kit operates at 300kHz switching frequency and has superior line- and load-transient response.

- S 1-Phase, Fast-Response Quick-PWM™
- S Active Voltage Positioning with Adjustable GainIndependent DC and Transient Control
- S High Speed, Accuracy, and Efficiency
- S Low-Bulk Output-Capacitor Count
- S 7V to 24V Input-Voltage Range
- S 0.3375V to 1.1250V Output-Voltage Range (6-Bit DAC)
- S 14A Load-Current Capability
- S 300kHz Switching Frequency
- S Power-Good (PWRGD) Indicator
- S Thermal Fault ( VRHOT ) Output
- S Output Overvoltage and Undervoltage Fault Protections
- S 28-Pin Thin QFN Package (4mm x 4mm)
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17409EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| C1, C8        |     2 | 10 F F Q 20%, 25V X5R ceramic capacitors (1210) TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM |
| C2, C14       |     0 | Not installed, ceramic capacitors (1210)                                                                    |
| C3, C9, C31   |     3 | 0.1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K                   |
| C4            |     0 | Not installed, ceramic capacitor (D case)                                                                   |

NVIDIA is a registered trademark of NVIDIA Corp. Quick-PWM is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C5            |     1 | 470 F F, 2V, 6m I low-ESR polymer capacitor (D case) SANYO 2TPF470M6 Panasonic EEF SX0D471XR |
| C6, C7        |     2 | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) TDK C1608X7R1A105K Murata GRM188R61A105K      |
| C10, C16, C18 |     0 | Not installed, ceramic capacitors (0603)                                                     |
| C11, C12, C34 |     3 | 1000pF Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K Murata GRM188R71H102K     |

## MAX17409 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION                      |   QTY | DESCRIPTION                                                                                                       |
|----------------------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C13                              |     1 | 100pF Q 10%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101K Murata GRM1885C1H101J                            |
| C19-C30                          |    12 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT |
| C33                              |     1 | 0.22 F F Q 20%, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT    |
| D1                               |     1 | 3A, 30V Schottky diode Nihon EC31QS03L Central Semi CMSH3-40M Lead Free                                           |
| D2                               |     1 | LED, green clear SMD (0805)                                                                                       |
| IMON, PWRGD, SKIP, VRHOT , VR_ON |     5 | Test points                                                                                                       |
| L1                               |     1 | 0.6 F H, 16A, 2.30m I power inductor NEC TOKIN MPC0750LR60C TOKO FDU0650-R56M                                     |
| N1                               |     1 | n-channelMOSFET(PowerPAK,8SO) Fairchild FDS6298 Vishay (Siliconix) SI4386DY                                       |
| N2                               |     0 | Not installed, n-channel MOSFET (PowerPAK, 8 SO)                                                                  |
| N3                               |     1 | n-channelMOSFET(PowerPAK,8SO) Fairchild FDS8670 Vishay (Siliconix) SI4336DY                                       |
| N4                               |     0 | Not installed, n-channel MOSFET (DPAK)                                                                            |
| R1                               |     0 | Not installed, 1W resistor-short (PC trace) (2512)                                                                |

| DESIGNATION                       |   QTY | DESCRIPTION                                                                                 |
|-----------------------------------|-------|---------------------------------------------------------------------------------------------|
| R2, R34                           |     2 | 10k I Q 1% resistors (0603)                                                                 |
| R3                                |     1 | 200k I Q 1% resistor (0603)                                                                 |
| R4, R8, R20, R33, R37             |     0 | Not installed, resistors (0603) R4, R20 are short (PC trace) and R8, R33, and R37 are open  |
| R5                                |     1 | 63.4k I Q 1% resistor (0603)                                                                |
| R6                                |     1 | 7.87k I Q 1% resistor (0603)                                                                |
| R7                                |     1 | 100k I Q 5% NTC thermistor, A = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J (0402) |
| R9                                |     1 | 1k I Q 5% resistor (0603)                                                                   |
| R10, R16, R17                     |     3 | 10 I Q 5% resistors (0603)                                                                  |
| R11, R12, R19                     |     3 | 0 I resistors (0603)                                                                        |
| R13                               |     1 | 100 I Q 1% resistor (0603)                                                                  |
| R14                               |     0 | Not installed, resistor (2512)                                                              |
| R18                               |     1 | 51 I Q 5% resistor (0603)                                                                   |
| R21-R29                           |     9 | 100k I Q 5% resistors (0603)                                                                |
| R30                               |     1 | 1.3k I Q 1% resistor (0603)                                                                 |
| R31                               |     1 | 2k I Q 1 %resistor (0603)                                                                   |
| R32                               |     1 | 10k I Q 1% NTC thermistor, A = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F         |
| R36                               |     1 | 6.81k I Q 1% resistor (0603)                                                                |
| SW1                               |     1 | 6-position low-profile DIP switch                                                           |
| SW2                               |     1 | 2-position low-profile DIP switch                                                           |
| TP1, TP2, TP3, VID0-VID5, VID_VCC |     0 | Not installed, test points                                                                  |
| U1                                |     1 | 1-phase Quick PWM controller (28 TQFN-EP*) Maxim MAX17409GTI+                               |
| -                                 |     1 | PCB: MAX17409 EVALUATION KIT+                                                               |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17409 Evaluation Kit

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
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17409 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 7V to 24V, &gt; 50W power supply, battery, or notebook AC adapter
- 5V at 1A DC bias power supply
- Dummy load capable of sinking 14A
- Digital multimeter (DMM)
- 100MHz dual-trace oscilloscope

## Detailed Description of Hardware

The  MAX17409  14A,  1-phase  buck-regulator  design is  optimized  for  a  300kHz  switching  frequency  and output-voltage  settings  of  approximately  0.9000V.  At VOUT = 0.9000V and VBATT = 12V, the inductor ripple is approximately 30% (LIR = 0.3).

## Setting the Output Voltage

The MAX17409 has an internal digital-to-analog converter  (DAC) that programs the output voltage. The output voltage can be digitally set from 0.3375V to 1.1250V (see Table 1) using the D0-D5 pins. There are two ways to set the output voltage:

- U Drive  the  external  VID0-VID5  inputs  (all  SW1 positions  are  off): The  output  voltage  is  set  by driving  VID0-VID5  with  open-drain  drivers  (pullup resistors are included on the board) or 3V/5V CMOS output logic levels.
- U Switch  SW1: When  SW1  positions  are  off,  the MAX17409's D0-D5 inputs are at logic 1 (connected to VDD). When SW1 positions are on, D0-D5 inputs are at logic 0 (connected to GND). The output voltage is  changed  during  operation  by  activating  SW1  on and off. As shipped, the EV kit is configured with SW1 positions set for 0.9000V output (see Table 1). Refer to the MAX17409 IC data sheet for more information.

## Procedure

The MAX17409 EV kit is fully assembled and tesed. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Ensure that the circuit is connected correctly to the supplies  and  dummy  load  prior  to  applying  any power.
- 2)  Verify that all positions of SW2 are set to the on positions.

The  DAC  code  settings  (D0-D5)  are  set  by  switch SW1.  Set  SW1  (1,  12),  SW1  (3,  10)  and  SW1 (4, 9) to the on positions. The output voltage is set for 0.9000V.

- 3)  Turn  on  the  battery  power  before  turning  on  the  5V bias power.
- 4)  Observe  the  0.9000V  output  voltage  with  the  DMM and/or  oscilloscope.  Look  at  the  LX  switching-node and  MOSFET  gate-drive  signals  while  varying  the load current.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX17409 Evaluation Kit

Table 1. Output-Voltage VID DAC Codes Adjustment Settings

|   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|----------------------|
|    1 |    0 |    0 |    0 |    0 |    0 |               1.1250 |
|    1 |    0 |    0 |    0 |    0 |    1 |               1.1125 |
|    1 |    0 |    0 |    0 |    1 |    0 |               1.1000 |
|    1 |    0 |    0 |    0 |    1 |    1 |               1.0875 |
|    1 |    0 |    0 |    1 |    0 |    0 |               1.0750 |
|    1 |    0 |    0 |    1 |    0 |    1 |               1.0675 |
|    1 |    0 |    0 |    1 |    1 |    0 |               1.0500 |
|    1 |    0 |    0 |    1 |    1 |    1 |               1.0375 |
|    1 |    0 |    1 |    0 |    0 |    0 |               1.0250 |
|    1 |    0 |    1 |    0 |    0 |    1 |               1.0125 |
|    1 |    0 |    1 |    0 |    1 |    0 |               1.0000 |
|    1 |    0 |    1 |    0 |    1 |    1 |               0.9875 |
|    1 |    0 |    1 |    1 |    0 |    0 |               0.9750 |
|    1 |    0 |    1 |    1 |    0 |    1 |               0.9625 |
|    1 |    0 |    1 |    1 |    1 |    0 |               0.9500 |
|    1 |    0 |    1 |    1 |    1 |    1 |               0.9375 |
|    1 |    1 |    0 |    0 |    0 |    0 |               0.9250 |
|    1 |    1 |    0 |    0 |    0 |    1 |               0.9125 |
|    1 |    1 |    0 |    0 |    1 |    0 |               0.9000 |
|    1 |    1 |    0 |    0 |    1 |    1 |               0.8875 |
|    1 |    1 |    0 |    1 |    0 |    0 |               0.8750 |
|    1 |    1 |    0 |    1 |    0 |    1 |               0.8625 |
|    1 |    1 |    0 |    1 |    1 |    0 |               0.8500 |
|    1 |    1 |    0 |    1 |    1 |    1 |               0.8375 |
|    1 |    1 |    1 |    0 |    0 |    0 |               0.8250 |
|    1 |    1 |    1 |    0 |    0 |    1 |               0.8125 |
|    1 |    1 |    1 |    0 |    1 |    0 |               0.8000 |
|    1 |    1 |    1 |    0 |    1 |    1 |               0.7875 |
|    1 |    1 |    1 |    1 |    0 |    0 |               0.7750 |
|    1 |    1 |    1 |    1 |    0 |    1 |               0.7625 |
|    1 |    1 |    1 |    1 |    1 |    0 |               0.7500 |
|    1 |    1 |    1 |    1 |    1 |    1 |               0.7375 |

## Switch SW2 Settings

Switch  SW2  controls  the  MAX17409  operating  modes (see Table 2).

## Dynamic Output-Voltage Transition Experiment

This MAX17409 EV kit is set to transition the output voltage at 12.5mV/µs.

During the voltage transition, watch the inductor current by looking at the current-sense inputs with a differential scope  probe.  Observe  the  low,  well-controlled  inductor  current  that  accompanies  the  voltage  transition. Slew-rate control during shutdown and startup results in well-controlled currents in to and out of the battery (input source).

|   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |   OUTPUT VOLTAGE (V) |
|------|------|------|------|------|------|----------------------|
|    0 |    0 |    0 |    0 |    0 |    0 |               0.7250 |
|    0 |    0 |    0 |    0 |    0 |    1 |               0.7125 |
|    0 |    0 |    0 |    0 |    1 |    0 |               0.7000 |
|    0 |    0 |    0 |    0 |    1 |    1 |               0.6875 |
|    0 |    0 |    0 |    1 |    0 |    0 |               0.6750 |
|    0 |    0 |    0 |    1 |    0 |    1 |               0.6625 |
|    0 |    0 |    0 |    1 |    1 |    0 |               0.6500 |
|    0 |    0 |    0 |    1 |    1 |    1 |               0.6275 |
|    0 |    0 |    1 |    0 |    0 |    0 |               0.6250 |
|    0 |    0 |    1 |    0 |    0 |    1 |               0.6125 |
|    0 |    0 |    1 |    0 |    1 |    0 |               0.6000 |
|    0 |    0 |    1 |    0 |    1 |    1 |               0.5875 |
|    0 |    0 |    1 |    1 |    0 |    0 |               0.5750 |
|    0 |    0 |    1 |    1 |    0 |    1 |               0.5625 |
|    0 |    0 |    1 |    1 |    1 |    0 |               0.5500 |
|    0 |    0 |    1 |    1 |    1 |    1 |               0.5275 |
|    0 |    1 |    0 |    0 |    0 |    0 |               0.5250 |
|    0 |    1 |    0 |    0 |    0 |    1 |               0.5125 |
|    0 |    1 |    0 |    0 |    1 |    0 |               0.5000 |
|    0 |    1 |    0 |    0 |    1 |    1 |               0.4875 |
|    0 |    1 |    0 |    1 |    0 |    0 |               0.4750 |
|    0 |    1 |    0 |    1 |    0 |    1 |               0.4625 |
|    0 |    1 |    0 |    1 |    1 |    0 |               0.4500 |
|    0 |    1 |    0 |    1 |    1 |    1 |               0.4275 |
|    0 |    1 |    1 |    0 |    0 |    0 |               0.4250 |
|    0 |    1 |    1 |    0 |    0 |    1 |               0.4125 |
|    0 |    1 |    1 |    0 |    1 |    0 |               0.4000 |
|    0 |    1 |    1 |    0 |    1 |    1 |               0.3875 |
|    0 |    1 |    1 |    1 |    0 |    0 |               0.3750 |
|    0 |    1 |    1 |    1 |    0 |    1 |               0.3625 |
|    0 |    1 |    1 |    1 |    1 |    0 |               0.3500 |
|    0 |    1 |    1 |    1 |    1 |    1 |               0.3375 |

There are two methods to create an output-voltage transition.  Select D0-D5 (SW1). Then manually change the SW1 settings to a new VID code setting (see Table 1) or disable all SW1 settings and drive the VID0-VID5 PCB test points externally to the desired code settings.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17409 Evaluation Kit

Table 2. MAX17409 Operating Mode Truth Table

| SHDN SW2 (1, 4)   | SKIP SW2 (2, 3)   | OPERATING MODE                       | DESCRIPTION                                                                                                                                                                                                                                                                                         |
|-------------------|-------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GND               | X                 | Disabled                             | Low-Power Shutdown Mode. DL forced low and the controller is disabled. The supply current drops to 10 F A (max).                                                                                                                                                                                    |
| Rising            | X                 | Pulse-skipping 1.56mV/ F s slew rate | Startup. When SHDN is pulled high, the MAX17409 begins the startup sequence. The controller enables the PWM controller and ramps the output voltage up to the boot voltage.                                                                                                                         |
| High              | Low               | Forced-PWM 12.5mV/ F s slew rate     | Full Power. The no-load output voltage is determined by the selected VID DAC code.                                                                                                                                                                                                                  |
| High              | High              | Pulse-skipping 12.5mV/ F s slew rate | Skip Mode. The no-load output voltage is determined by the selected VID DAC code. When SKIP is pulled high, the MAX17409 immediately enters 1-phase pulse-skipping operation allowing automatic PWM/PFM switchover under light loads. The PWRGD upper threshold is blanked during the tran- sition. |
| Falling           | X                 | Forced-PWM 1.56mV/ F s slew rate     | Shutdown. When SHDN is pulled low, the MAX17409 immediately pulls PWRGD low, and the output voltage is ramped down to ground. Once the output reaches 0V, the controller enters the low-power shutdown state.                                                                                       |
| High              | X                 | Disabled                             | Fault Mode. The fault latch has been set by the MAX17409 UVP or thermal shutdown protection, or by the OVP protection. The controller remains in fault mode until VCC power is cycled or SHDN is toggled.                                                                                           |

X = Don't care.

## Load-Transient Experiment

One  interesting  experiment  is  to  subject  the  output to  large,  fast-load  transients  and  observe  the  output with  an  oscilloscope.  Accurate  measurement  of  output ripple  and  load-transient  response  invariably  requires that ground clip leads be completely avoided, and that the  probe  be  removed  to  expose  the  GND  shield,  so the  probe  is  directly  grounded  with  as  short  a  wire  as possible to the board. Otherwise, EMI and noise pickup corrupt the waveforms.

Most  bench-top  electronic  loads  intended  for  powersupply  testing  lack  the  ability  to  subject  the  DC-DC coverter to ultra-fast load transients. Emulating the supply current dI/dt at the VOUT pins requires at least 500A/ µs load transients. One easy method for generating such an abusive-load transient is to install a power MOSFET at the N4 location and install resistor R14 between 5mω and 10mω to monitor the transient current. Then drive its gate (TP1) with a strong pulse generator at a low duty cycle  (&lt;  5%)  to  minimize  heat  stress  in  the  MOSFET. Vary the high-level output voltage of the pulse generator to vary the load current.

<!-- image -->

To determine the load current, you might expect to insert a meter in the load path, but this method is prohibited here by the need for low resistance and inductance in the path of the dummy-load MOSFET. To determine how much  load  current  a  particular  pulse-generator  amplitude is causing, observe the current through inductor L1. In the buck topology, the load current is approximately equal to the average value of the inductor current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17409 Evaluation Kit

Figure 1. MAX17409 EV Kit Schematic

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17409 Evaluation Kit

Figure 2. MAX17409 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX17409 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17409 Evaluation Kit

Figure 4. MAX17409 EV Kit PCB Layout-Internal Layer 2 (PGND Plane)

<!-- image -->

Figure 5. MAX17409 EV Kit PCB Layout-Internal Layer 3 (GND/PGND Layer)

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

1.0'

Figure 6. MAX17409 EV Kit PCB Layout-Solder Side

## MAX17409 Evaluation Kit

Figure 7. MAX17409 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

9