<!-- lastmod 2022-08-02 -->
## General Description

The MAX5950 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board featuring a PWM step-down DC-DC controller with integrated hot-swap capabilities for PCIe ® ExpressModule™. The circuit board has an X8E PCIe ExpressModule form factor. The EV kit's circuit uses a MAX5950 and two MAX5951 ICs in 32-pin thin QFN packages. The MAX5950 EV kit provides outputs of 1.2V at 2.5A, and 2.5V and 3.3V with each providing 1.25A.

The MAX5950 EV kit demonstrates the MAX5950 IC's hot-swap inrush current control capabilities as well as the  MAX5950 and MAX5951 ICs' hiccup-mode output short-circuit  protection during normal operation. The MAX5950 controls an external n-channel MOSFET for inrush control during hot swapping. The EV kit can operate over an 8V to 16V input range, however, it is configured for 12V input operation by default. The MAX5950 EV kit also includes connections for the PCIe bus 3.3V auxiliary supply.

Additionally, the MAX5950 and MAX5951 PWM DC-DC step-down controllers' lossless current sensing, digital soft-start,  startup  synchronization,  thermal  shutdown, and hiccup-mode output short-circuit current-limit features can be evaluated using the EV kit. The VOUT1 circuit can also be reconfigured to evaluate an alternate current-sense method using a resistor for the DC-DC converter. The hot-swap and PWM undervoltage lockouts (UVLO) can easily be reconfigured for other set  points.  The  MAX5950 EV kit can be reconfigured for  various  startup  tracking/sequencing modes such as ratiometric-tracking, startup sequencing, PGOOD sequencing. The EV kit is configured for PGOOD sequencing by default.

To ease bench evaluation of the MAX5950 EV kit, a MAX5950PB power board assembly is included with the EV kit. The power board features bulk holdup capacitance for the 12V and 3.3V auxiliary power rails providing power to a single X8E PCIe connector. The power board includes switches, HC logic, and LEDs to simulate hot swapping a MAX5950 EV kit into a server's backplane utilizing an X8E PCIe connector.

The MAX5950 EV kit is not optimized for size, but is designed for ease of lab evaluation. See Appendix A, which shows a compact reference design with the same output voltages and currents. The reference design is configured for PGOOD sequencing.

PCIe is a registered trademark and ExpressModule is a trademark of PCI-SIG Corp.

<!-- image -->

## Features

- ♦ Demonstrates PCIe ExpressModule Hot-Swap and DC-DC Design
- ♦ Outputs

1.2V at 2.5A 2.5V at 1.25A

3.3V at 1.25A

- ♦ X8E PCIe ExpressModule Form Factor
- ♦ Demonstrates Inrush Current Control and Lossless Current Sensing
- ♦ Demonstrates Output Overcurrent/Short-Circuit Protection
- ♦ Configurable PWM and Hot-Swap UVLO
- ♦ Configurable for Several Startup Tracking/Sequencing Modes
- ♦ Power Board Assembly Eases Bench Evaluation
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5950EVKIT | 0°C to +70°C | 32 TQFN-EP*  |

## MAX5950 EV Kit Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                           |
|----------------------------|-------|-----------------------------------------------------------------------|
| C1                         |     1 | 100µF ±20%, 6.3V X5R capacitor (1210) Murata GRM32ER60J107M           |
| C2                         |     1 | 0.001µF ±10%, 50V X7R capacitor (0805) Murata GRM216R71H102K          |
| C3, C4                     |     2 | 22µF ±10%, 16V X5R ceramic capacitors (1210) Murata GRM32ER61C226KE20 |
| C5, C8, C45, C48, C85, C88 |     6 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K     |
| C6, C7, C46, C47, C86, C87 |     6 | 2.2µF ±10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A225K   |
| C9                         |     1 | 1000pF ±5%, 100V C0G ceramic capacitor (0805) Murata GRM2195C2A102J   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX5950 Evaluation Kit

## MAX5950 EV Kit Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                                                                           |
|--------------------|-------|-------------------------------------------------------------------------------------------------------|
| C10, C11, C50, C90 |     4 | 22µF ±20%, 6.3V X5R capacitors (1206) Murata GRM31CR60J226ME19 ONLY use this specific capacitor       |
| C12                |     1 | 820pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H821J                                     |
| C13, C53, C93      |     3 | 220pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H221K                                   |
| C14, C54, C94      |     3 | 0.033µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H333K                                 |
| C15, C49, C89      |     0 | Not installed, ceramic capacitors (0805)                                                              |
| C44, C84           |     2 | 10µF ±10%, 16V X5R capacitors (1206) Murata GRM31CR61C106KC31B                                        |
| C52, C92           |     2 | ONLY use this specific capacitor 1500pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H152K |
| D1                 |     1 | Green, right-angle LED (T-1 3/4)                                                                      |
| D2                 |     1 | Yellow, right-angle LED (T-1 3/4)                                                                     |
| D3, D43, D83       |     3 | Green surface-mount LEDs (1206)                                                                       |
| D4, D44, D84       |     3 | 300mA, 75V switching diodes (SOD- 323) Diodes Inc 1N4148WS-F                                          |
| L1                 |     1 | 1µH, 3.5A inductor Pulse PG0063.102NL                                                                 |
| L41                |     1 | 6.8µH, 1.5A inductor Pulse PG0063.682NL                                                               |
| L81                |     1 | 10µH, 1.2A inductor Pulse PG0063.103NL                                                                |
| N1                 |     1 | 30V, 2.5A n-channel MOSFET (TSOP-6) Vishay Si3948DV-T1-E3                                             |
| N2                 |     1 | 20V, 5.3A n-channel MOSFET (PowerPack 1212-8) Vishay Si7212DN-T1-E3                                   |
| N3, N43            |     2 | 20V, 1.9A n-channel MOSFETs (SC70-6) Fairchild FDG311N_NL                                             |
| N42, N82           |     2 | 20V, 3.1A n-channel MOSFETs (1206-8 chipFET) Vishay Si5904DC-T1-E3                                    |
| R1                 |     1 | 7.5 Ω ±5% resistor (1210)                                                                             |

| DESIGNATION                                                                                       |   QTY | DESCRIPTION                                                                                                                 |
|---------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------|
| R2-R5, R21, R27, R30, R31, R33, R35, R36, R39, R44, R45, R50, R64, R67, R84, R85, R90, R104, R107 |     0 | Not installed, resistors (0805)                                                                                             |
| R6, R12                                                                                           |     0 | Not installed, resistors (0603)                                                                                             |
| R7, R11                                                                                           |     2 | 0 Ω ±5% resistors (0603)                                                                                                    |
| R8, R48, R88                                                                                      |     3 | 5.6 Ω ±5% resistors (0805)                                                                                                  |
| R9, R49                                                                                           |     2 | 910 Ω ±5% resistors (0805)                                                                                                  |
| R10                                                                                               |     1 | 10 Ω ±5% resistor (0805)                                                                                                    |
| R13                                                                                               |     0 | Not installed, resistor (0805) 0.033 Ω ±1%, 0.25W resistor Panasonic ERJL06KF33MV or IRC LRC-LR0805LF-01-R033-F recommended |
| R14                                                                                               |     1 | 576 Ω ±1% resistor (0603)                                                                                                   |
| R15, R55, R95                                                                                     |     3 | 10k Ω ±0.5% resistors (0805) Panasonic ERJ6RBD103V                                                                          |
| R16                                                                                               |     1 | 20k Ω ±0.5% resistor (0805) Panasonic ERJ6RBD203V or Vishay TNPW-0805 20k Ω ±5% T-2RT1                                      |
| R18                                                                                               |     1 | 5.23k Ω ±1% resistor (0805)                                                                                                 |
| R19, R59, R99                                                                                     |     3 | 15k Ω ±1% resistors (0805)                                                                                                  |
| R20                                                                                               |     1 | 2.15k Ω ±1% resistor (0805)                                                                                                 |
| R22                                                                                               |     1 | 48.7k Ω ±1% resistor (0805)                                                                                                 |
| R23                                                                                               |     1 | 49.9k Ω ±1% resistor (0805)                                                                                                 |
| R24, R28, R32, R34, R37, R38, R68, R108                                                           |     8 | 0 Ω ±5% resistors (0805)                                                                                                    |
| R25, R26, R89                                                                                     |     3 | 110 Ω ±5% resistors (0805)                                                                                                  |
| R54, R94                                                                                          |     2 | 133 Ω ±1% resistors (0805)                                                                                                  |
| R56                                                                                               |     1 | 4.70k Ω ±0.5% resistor (0805) Vishay TNPW-0805 4.7k Ω ±0.5% T-9RT1 or Panasonic ERJ6RBD472V                                 |
| R57                                                                                               |     1 | 10 Ω ±1% resistor (0805)                                                                                                    |
| R58                                                                                               |     1 | 27.4k Ω ±1% resistor (0805)                                                                                                 |
| R60, R100                                                                                         |     2 | 3.83k Ω ±1% resistors (0805)                                                                                                |
| R62, R102                                                                                         |     2 | 34k Ω ±1% resistors (0805)                                                                                                  |
| R63, R103                                                                                         |     2 | 59.0k Ω ±1% resistors (0805)                                                                                                |
| R96                                                                                               |     1 | 3.16k Ω ±0.5% resistor (0805)                                                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950EV Kit Component List (continued)

| DESIGNATION                                         |   QTY | DESCRIPTION                                                |
|-----------------------------------------------------|-------|------------------------------------------------------------|
| R97                                                 |     1 | 39.2 Ω ±1% resistor (0805)                                 |
| R98                                                 |     1 | 40.2k Ω ±1% resistor (0805)                                |
| VOUT1, VOUT2, VOUT3                                 |     3 | PC test points, red                                        |
| PGND, PGND, PGND, PGND, PGND, GND1,                 |     8 | PC test points, black                                      |
| GND2, GND3 PWREN , PWRFLT , MPWRGD , +12VIN, +12VHS |     5 | PC test points, miniature, red                             |
| U1                                                  |     1 | MAX5950ETJ+ (32-pin TQFN, 5mm x 5mm) Package code: T3255-4 |
| U41, U81                                            |     2 | MAX5951ETJ+ (32-pin TQFN, 5mm x 5mm) Package code: T3255-4 |
| -                                                   |     1 | MAX5950EVKIT circuit board assembly                        |
| -                                                   |     1 | X8E PCIe Express power board assembly Maxim MAX5950PB      |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Diodes Inc              | 805-446-4800 | www.diodes.com        |
| Fairchild               | 888-522-5372 | www.fairchildsemi.com |
| IRC                     | 361-992-7900 | www.irctt.com         |
| Molex Connector Corp    | 800-786-6539 | www.molex.com         |
| Murata                  | 770-436-1300 | www.murata.com        |
| Panasonic               | 714-373-7366 | www.panasonic.com     |
| Pulse Engineering       | 858-674-8100 | www.pulseeng.com      |
| Sanyo Electronic Device | 619-661-6835 | www.sanyodevice.com   |
| Vishay                  | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5950 when contacting these component suppliers.

<!-- image -->

Required equipment:

- One each of the following DC power supplies 12V, 2A 3.3V, 1A
- One voltmeter

The MAX5950 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

## MAX5950PB Power Board Assembly Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                  |
|-------------------------|-------|------------------------------------------------------------------------------|
| C1                      |     1 | 150µF, 6.3V low-Z electrolytic capacitor (6.3mm x 6mm case) Sanyo 6.3CE150KX |
| C2, C8, C9              |     3 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K            |
| C3-C7                   |     5 | 680µF, 16V electrolytic capacitors (10mm x 10.2mm case) Sanyo 16CE680KX      |
| D1, D2                  |     2 | Yellow surface-mount LEDs (1206)                                             |
| D3                      |     1 | Red surface-mount LED (1206)                                                 |
| D4, D5                  |     2 | Green surface-mount LEDs (1206)                                              |
| J1                      |     1 | X8E PCIe Express connector (140 pins) Molex 48230-1015                       |
| R1                      |     1 | 62 Ω ±5% resistor (0805)                                                     |
| R2                      |     1 | 510 Ω ±5% resistor (0805)                                                    |
| R3, R4                  |     2 | 620 Ω ±5% resistors (0805)                                                   |
| R5                      |     1 | 10k Ω ±5% resistor (0805)                                                    |
| R6                      |     1 | 150 Ω ±5% resistor (0805)                                                    |
| R7, R8                  |     2 | 100k Ω ±5% resistors (0805)                                                  |
| SW1, SW2, SW3           |     3 | SPST slide switches                                                          |
| +12V, PGND, PGND, +VAUX |     4 | Uninsulated banana jacks                                                     |
| TP1-TP5, TP7            |     6 | PC test points, miniature red                                                |
| TP6                     |     1 | PC test point, miniature black                                               |
| U1                      |     1 | HC quad 2-input AND gate (14-SOP) Texas Instruments SN74HC08NSR              |
| -                       |     1 | X8E PCIe Express power board assembly (MAX5950PB)                            |
| -                       |     5 | Rubber bumpers                                                               |

## Quick Start

## MAX5950 Evaluation Kit

Note: The banana leads connecting the 12V and 3.3V power  supply to the EV  kit must be short (&lt; 24in long).

## MAX5950 EV Kit and MAX5950PB Power Board Assembly Configuration

- 1) The MAX5950 EV kit is configured by default for PGOOD sequencing startup.
- 2) Set switches SW1, SW2, and SW3 to the OFF position on the MAX5950PB power board.

## MAX5950PB Power Board Assembly Connections

- 1) Utilizing  short  5A-rated  banana  leads  (&lt;  24in  long) connect the supply ground to the PGND banana jack. Utilizing  short  5A-rated  banana  leads  (&lt;  24in long) connect the 12V DC power supply to the adjacent +12V banana jack.
- 2) Utilizing a short banana lead (&lt; 24in long) connect the supply ground to the PGND banana jack. Utilizing a short banana lead (&lt; 24in long) connect the 3.3V DC power supply to the adjacent +VAUX banana jack.
- 3) Test points TP1-TP5 and TP7 on the MAX5950PB power board are provided to observe various system hot-swap signals. TP6 is PGND.

## Hot Swapping the MAX5950 EV Kit

- 1) Turn  on  the  power  supplies  sourcing  the MAX5950PB power board in any sequence.
- 2) Set switches SW1 (PWRLED), SW2 (ATNLED), and SW3 ( PWREN ) to the ON position.
- 3) Plug the MAX5950 EV kit into the MAX5950PB power board assembly.
- 4) Verify that the following green LEDs on the MAX5950 EV kit are as shown below.
- 5) Verify that the voltage at the following pads and PGND on the MAX5950 EV kit are as shown below.
- 6) Verify  that  the  following  LEDs  on  the  MAX5950PB power board and EV kit are as shown below.

```
VOUT1, D3 = ON VOUT2, D43 = ON VOUT3, D83 = ON
```

VOUT1 = 1.2V

VOUT2 = 2.5V

VOUT3 = 3.3V

MAX5950PB power board: +12V, yellow D1 = ON +VAUX, yellow D2 = ON PWRFLT , red D3 = OFF MPWRGD , green D4 = ON PWREN , green D5 = ON

```
MAX5950 EV kit: PWRLED, green D1 = ON ATNLED, yellow D2 = ON
```

- 7) Sliding switches SW1 and/or SW2 to the OFF position  will  disable  the  PWRLED and ATNLED on the MAX5950 EV kit. Also, sliding switches SW1 and SW3 to the ON position will turn on LED D5 on the power board assembly and the PWRLED and ATNLED on the MAX5950 EV kit.
- 8) Sliding  switch  SW3 to the OFF position will disable the MAX5950 EV kit's outputs and reset all three DCDC controllers on the MAX5950 EV kit.
- 9) Test points TP1-TP7 on the MAX5950 EV kit are provided to observe each MOSFET's gate voltage, respectively, with an oscilloscope.

See the MAX5950PB Power Board Assembly section for configuring and using the power board.

## Detailed Description

The MAX5950 EV kit demonstrates a hot-swap and triple-output DC-DC converter circuit design on an X8E PCIe ExpressModule form-factor PC board. The EV kit is configured for 12V input operation by default, however, it can operate from an input range of 8V to 16V with suitable reconfiguration. The MAX5950 EV kit includes a passive PCIe Express 3.3V auxiliary supply bus. Resistor R1 limits the precharge current and time for the 3.3V auxiliary supply bus capacitor, C1.

A MAX5950 (U1) PWM step-down DC-DC controller with integrated hot-swap capabilities provides the hotswapping control features and regulates the main output providing 1.2V at 2.5A. Two MAX5951 controllers (U41, U81) regulate the other outputs, providing 2.5V and 3.3V at 1.25A each.

The EV kit demonstrates the MAX5950 IC's hot-swap inrush current control, as well as hiccup-mode output short-circuit  protection during normal operation. The MAX5950 drives a dual n-channel MOSFET (N1) while hot swapping and thus limits inrush current during the hot-swapping event. Inrush current is sensed across N1's drain-source resistance by the MAX5950, thus providing short-circuit protection after successful hot swapping. The current-sensing feature can be disabled by reconfiguring resistors R7 and R6. During a fault, the MAX5950 circuit breaker function latches the PWRFAULT pin to indicate a fault has occurred. To reset U1, cycle the input power or momentarily pull the PWREN pin high. The MAX5950 hot-swap UVLO threshold is set to 7V, however, other UVLO values can be evaluated by installing resistors R2 and R3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

Table 1. Startup Tracking/Sequencing Modes Configurations

| MODE                       | OPEN RESISTORS                                    | 0 Ω RESISTORS                          | CAPACITOR AND 1% RESISTORS TO BE CALCULATED   |
|----------------------------|---------------------------------------------------|----------------------------------------|-----------------------------------------------|
| PGOOD Sequencing (default) | R21, R27, R30, R31, R33, R35, R36, R39, R67, R107 | R28, R32, R34, R37, R68, R108          | -                                             |
| Ratiometric Tracking       | R27, R32, R34, R39, R67, R107                     | R28, R30, R31, R33, R35-R38, R68, R108 | -                                             |
| STARTUP Sequencing         | R32, R34                                          | R30, R31, R33, R35-R39                 | C15, R22, R27, R28, R67, R68, R107, R108      |

The MAX5950 controller regulates the main output voltage at VOUT1 by driving MOSFETs N2A and N2B. Voltage-mode control is used along with feedback resistors  R15 and R16 to set the voltage to 1.2V. RC network R14 to R16, R20, and C12 to C14 form the compensation network for this output. The MAX5950 switches at a 1MHz frequency and that is set by resistor  R23.  The  SYNCOUT pin of U1 drives the SYNCIN pins of both MAX5951 controllers. The PWM UVLO threshold is set to 7V, however, other UVLO settings can be evaluated by installing resistors R4 and R5.

Separate MAX5951 controllers regulate the two other outputs, VOUT2 and VOUT3. IC U41, a MAX5951, drives MOSFETs N42A and N42B and utilizes voltagemode control along with feedback resistors R55, R56, and R57 to set VOUT2 at 2.5V. RC network R54-R57, R60, and C52 to C54 form the compensation network for  this  output.  IC  U81,  a  MAX5951,  drives  MOSFETs N82A and N82B and utilizes voltage-mode control along with feedback resistors R95, R96, and R97 to set VOUT3 at 3.3V. RC network R94, R100, and C92 to C94 form the compensation network for this output.

The VOUT2 and VOUT3 converters switch at 1MHz and are driven by the SYNCOUT pin of U1. Both U41 and U81 switch 180 degrees out-of-phase with respect to U1. Each converter's PWM UVLO is set by a resistordivider. To evaluate a specific PWM UVLO different than the default, select and install the required resistors.

All three outputs are configured for lossless valley current sensing by default. However, output 1 can be reconfigured to use a current-sense resistor. See the Current-Limiting (ILIM) section for reconfiguring the current-sensing method. The MAX5950 EV kit demonstrates  all  three  output's  respective  controllers'  digital soft-start,  thermal  shutdown,  and  hiccup-mode output short-circuit current-limit features.

<!-- image -->

The  MAX5950  EV  kit  is  configured  for  PGOOD sequencing by default. The EV kit can also be reconfigured for ratiometric tracking or startup sequencing. See the Startup Tracking/Sequencing Modes for reconfiguring the startup mode.

The MAX5950 EV kit features a green PWRLED LED and yellow ATNLED LED to indicate connectivity when the EV kit is currently powered. Red test points are included for probing various signals. All of the EV kit's black test points are PGND or GND points.

The  EV  kit  includes  an  X8E  PCIe  power  board (MAX5950PB) assembly that includes bulk-holdup capacitance for the PCIe 12V and 3.3V auxiliary power rails. The MAX5950PB provides power to a single X8E PCIe connector, J1. The power board assembly includes three switches, HC logic, and LEDs that facilitate the simulation of hot swapping a MAX5950 EV kit into a server's backplane. See the MAX5950PB Power Board Assembly section for more information on the MAX5950PB assembly.

## EV Kit Reconfiguration

The following table displays the various configurable functions provided by the MAX5950 and MAX5951 ICs used on the MAX5950 EV kit. Information on component replacement or removal is provided.

## Startup Tracking/Sequencing Modes

The  MAX5950  EV  kit  is  configured  for  PGOOD sequencing by default. The EV kit can be reconfigured for  one  of  three  startup  tracking/sequencing modes such as ratiometric tracking, startup sequencing, or PGOOD sequencing. To reconfigure the EV kit for another mode, install or remove the appropriate surface-mount (0805 case) resistor and/or capacitor as detailed in Table 1.

Chart 1 illustrates the required connections for the three startup modes: tracking, startup sequencing, and PGOOD sequencing.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Chart 1. Startup Modes Connections

<!-- image -->

## Hot-Swap Controls and Other DC-DC Converter Configurations

## Hot-Swap UVLO Configuration (HUVLO)

The MAX5950 hot-swap UVLO is configured for 7V (typ)  on  the  rising  +12VIN  input  voltage  by  default. Other hot-swap UVLOs can be evaluated by selecting and installing resistors R2 and R3 (0805 case). Using the desired startup voltage, calculate the resistor R2 value using the following equation:

<!-- formula-not-decoded -->

where VINSTARTUP is the desired hot-swap startup voltage ( ≥ 7V) and resistor R3 is typically 10k Ω . Refer to the MAX5950 data sheet for additional information on the HUVLO pin.

## Hot-Swap Sense Input Configuration (HSENSE)

The MAX5950 monitors input current by sensing the voltage across MOSFET N1. Once the MOSFET is fully enhanced after hot swapping, the MAX5950 circuit breaker function is enabled. To disable sensing input current, remove resistor R7 and install a 0 Ω , 0805, surface-mount resistor at the R6 resistor pads.

## PWM UVLO Configuration (PUVLO)

The MAX5950 and MAX5951 PWM UVLOs are configured for 7V (typ) on the rising 12VHS input voltage. Other PWM UVLOs can be evaluated by selecting and installing  resistors  R4  and R5 for U1, resistors R44 and R45 for U41, or resistors R84 and R85 for U81 (0805 case). Using the desired startup voltage, calculate the appropriate resistor value using the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Current-Limiting Reconfiguration

| IC   | SENSE RESISTOR                                | RESISTORS            | ILIM RESISTORS                | EV KIT FUNCTION                           |
|------|-----------------------------------------------|----------------------|-------------------------------|-------------------------------------------|
| U1   | R13 = PC trace short                          | R11 = 0 Ω R12 = Open | R21 = Open R22 = 5k Ω         | Lossless current sensing                  |
| U1   | R13 = Cut open trace shorting pads, calculate | R11 = Open R12 = 0 Ω | R21 = Calculate R22 = 48.7k Ω | Alternate inductor valley current sensing |

where VINSTARTUP is the desired converter startup voltage ( ≥ 7V) and resistors R5, R45, and R85 are 10k Ω . Refer to the MAX5950 data sheet for additional information on the MAX5950 and MAX5951 PUVLO pin.

## DC-DC Enable Input Configuration (THRESH)

The MAX5950 and MAX5951 DC-DC enable THRESH inputs are configured for 1.22V by default, and the respective converter starts when its DCENI input is greater than 1.22V. To evaluate other DCENI startup voltages, set the THRESH voltage using the equation below. Reconfigure the respective controller by installing  the  recommended 0805 surface-mount 1% resistors at the designated resistor PC board pads. Refer to the MAX5950 data sheet for additional information on the MAX5950 and MAX5951 IC's THRESH pin.

<!-- formula-not-decoded -->

where VTHRESH is between 0.6V and 2.5V.

## Output Voltage Sensing (SENSE)

The MAX5950 and MAX5951 controllers monitor the respective output voltages to determine if the output power is good. Resistors R18 and R19 for U1, resistors R58 and R59 for U41, and resistors R98 and R99 (0805 case) for U81 are selected to provide a PGOOD trip voltage that is 90% of the typical output voltage. To evaluate other PGOOD trip voltages, use the following equation:

<!-- formula-not-decoded -->

R19, R59, R99 = 10k Ω

where VPGTH is the desired power-good threshold voltage. Resistors R19, R59, and R99 are typically 10k Ω . Refer to the MAX5950 data sheet for additional information on the MAX5950 and MAX5951 SENSE pins.

<!-- image -->

## Current-Limiting (ILIM)

All three outputs on the MAX5950 EV kit are configured for  lossless  valley  current  sensing  by  default.  Refer  to the MAX5950 IC data sheet for more information on how lossless valley current limiting functions and how to set the required ILIM resistors, R22, R62, and R102. Alternatively,  output  1  can  be  independently  reconfigured to use a current-sense resistor. To reconfigure the current-sensing method, see Table 2; use the equations below for selecting the current-sense resistor.

The MAX5950 controller turns off the switching MOSFET (N2-A) for the subsequent switching cycle if the voltage difference at CS+ and CS- reached 100mV during the off-time  for  more  than  8  sequential  clock  cycles,  the controller will go into hiccup mode. Current-sense resistor R13 sets the valley current limit when using this mode of current sensing. To evaluate other current limits, current-sense resistor R13 must be replaced with a surface-mount resistor (1210 size) as determined by the following equation:

<!-- formula-not-decoded -->

where VCS = VILIM/10, IOUTMAX = maximum DC output current (2.5A as configured).

When using a current-sense resistor, use R21 and R22 to set the ILIM threshold voltage. Use the following equation to configure the desired ILIM threshold voltage.

<!-- formula-not-decoded -->

where VREG = 5V, VILIM is in the range of 0.5V to 3.5V, and R22 is 5k Ω .

Refer to the MAX5950 data sheet for additional information on the MAX5950 controller current-sensing capabilities.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

## MAX5950 Evaluation Kit

## MAX5950PB Power Board Assembly

## X8E PCIe Power Board Assembly

The MAX5950PB PCIe power board assembly includes bulk-holdup capacitance for the PCIe 12V and 3.3V auxiliary power rails. Connect a 12V, 2A minimum rated power supply to the +12V and adjacent PGND banana jacks or pads. Connect a 3.3V, 1A minimum rated power supply to the +VAUX and adjacent PGND banana jacks or pads. Yellow LEDs D1 and D2 on the power board indicate when power is applied and assist discharging the respective bulk-holdup capacitance. The MAX5950PB provides power to a single X8E PCIe connector, J1.

The MAX5950PB includes three switches, HC logic, and LEDs that facilitate the simulation of hot swapping a MAX5950 EV kit into a server's backplane. Slide switch SW1 controls the PWRLED signal and SW2 controls the ATNLED signal. SW3 is used to enable/disable or reset the MAX5950 controller, thus enabling and disabling the MAX5950 EV kit outputs.

Red LED D3 indicates when a PWRFLT signal is  activated and/or the green LED D4 indicates when a MPWRGD signal is activated by the MAX5950 controller. The green LED D5 indicates when a PRSNT and ATNLED signal are present, thus simulating a system slot interface signal.

See the Quick Start section for additional information on configuring and using the MAX5950PB power board assembly.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

## PCI-Express-X8E Hot-Swap DC-DC Converters

<!-- image -->

Figure 1. MAX5950 EV Kit Schematic-Hot-Swap and VOUT1 Circuits

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 2. MAX5950 EV Kit Schematic-VOUT2 Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

<!-- image -->

Figure 3. MAX5950 EV Kit Schematic-VOUT3 Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 4. MAX5950 EV Kit Schematic-Tracking Sequencing Configuration Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

<!-- image -->

Figure 5. MAX5950 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 6. MAX5950 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

<!-- image -->

Figure 7. MAX5950 EV Kit PC Board Layout-Inner Layer, GND/PGND Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 8. MAX5950 EV Kit PC Board Layout-Inner Layer, VCC/PGND Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

<!-- image -->

Figure 9. MAX5950 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 10. MAX5950 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5950 Evaluation Kit

## MAX5950PB Power Board Assembly

Figure 11. MAX5950PB Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 12. MAX5950PB Component Placement GuideComponent Side

<!-- image -->

Figure 13. MAX5950PB PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5950 Evaluation Kit

Figure 14. MAX5950PB PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

## Appendix A

Figure 15. MAX5950 EV PCIe ExpressModule Reference Design

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5950 Evaluation Kit

Figure 16. MAX5950 EV PCIe ExpressModule Reference Design-Composite View

<!-- image -->

Figure 17. MAX5950 EV PCIe ExpressModule Reference Design-Top Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 18. MAX5950 EV PCIe ExpressModule Reference Design-Bottom Layer

<!-- image -->

Figure 19. MAX5950 EV PCIe ExpressModule Reference Design-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5950 Evaluation Kit

Figure 20. MAX5950 EV PCIe ExpressModule Reference Design-Bottom Silkscreen

<!-- image -->

Figure 17. MAX5950 EV PCIe ExpressModule Reference DesignInner 12VIN-12VHS-PGND Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5950 Evaluation Kit

Figure 22. MAX5950 EV PCIe ExpressModule Reference Design-Inner GND-PGND Layer

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Boblet Boblet Boblet