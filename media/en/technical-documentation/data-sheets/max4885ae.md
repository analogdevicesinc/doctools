<!-- lastmod 2022-08-04 -->
<!-- image -->

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## General Description

The  MAX4885AE  integrates  high-bandwidth  analog switches,  level-translating  buffers,  and  level-translating FET  switches  to  implement  a  complete  2:1  multiplexer for  VGA  signals.  The  device  provides  three  very  highfrequency 900MHz (typ) SPDT switches for RGB signals, two low-frequency clamping switches for the DDC signals, a pair of level-translating buffers for the H\_ and V\_ signals, and integrated extended ESD protection.

Horizontal  and  vertical  synchronization  (H\_/V\_)  inputs feature  level-shifting  buffers  to  support  low-voltage controllers  and  standard  5V-TTL-compatible  monitors, meeting  the  VESA  requirement.  Display  Data  Channel (DDC), consisting of SDA\_ and SCL\_, are FET switches that  protect  the  low-voltage  VGA  source  from  potential damage  from  high-voltage  presence  on  the  monitor while reducing capacitive load.

All  seven  output  terminals  of  the  MAX4885AE  feature high-ESD  protection  to Q 15kV  Human  Body  Model (HBM) (see the Pin Description ). All other pins are protected to Q 2kV Human Body Model (HBM).

The MAX4885AE is specified over the extended -40 N C to +85 N C temperature range, and is available in a spacesaving, 28-pin, 4mm x 4mm TQFN package.

## Applications

Notebook Computer-MXM/Switchable Graphics KVM for Servers

## Features

- S Low 5 I (typ) On-Resistance (R\_, G\_, B\_ Signals)
- S Low 5.5pF (typ) On-Capacitance (R\_, G\_, B\_ Signals)
- S Independent, Selectable Logic Inputs for Switching
- S Similar Pin Configuration to MAX4885
- S Ultra-Small, 28-Pin (4mm x 4mm) TQFN Package
- S  Q 15kV ESD HBM

## Ordering Information

| PART          | TEMP RANGE         | PIN-PACKAGE   |
|---------------|--------------------|---------------|
| MAX4885AEETI+ | -40 N C to +85 N C | 28 TQFN-EP*   |

Denotes a lead(Pb)-free/RoHS-compliant package. EP = Exposed pad.

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## ABSOLUTE MAXIMUM RATINGS

| (All voltages referenced to GND unless otherwise noted.)                                                     |
|--------------------------------------------------------------------------------------------------------------|
| VCC ..........................................................................-0.3V to +6V                   |
| V L .............................................................. -0.3V to (VCC + 0.3V)                     |
| R_, G_, B_, H0, V0, SDA0, SCL0............. -0.3V to (VCC + 0.3V)                                            |
| H1, H2, V1, V2, SDA1, SDA2, SCL1, SCL2, SEL1, SEL2 ................................... -0.3V to (V L + 0.3V) |
| Continuous Current through R_, G_, B_ Switches.......... Q 50mA                                              |
| Continuous Current through SDA_, SCL_ Switches ...... Q 50mA                                                 |
| Continuous Current into SEL1, SEL2, H1, H2, V1, V2 .... Q 20mA                                               |
| Peak Current through all Switches (pulsed at 1ms, 10% duty cycle)............................... Q 100mA     |

| Continuous Power Dissipation (T A = +70 N C) 28-Pin TQFN (derate 28.6mW/ N C above +70 N C)....2285.7mW   |
|-----------------------------------------------------------------------------------------------------------|
| Junction-to-Ambient Thermal Resistance ( B JA ) (Note 1)                                                  |
| 28-Pin TQFN.................................................................35 N C/W                      |
| Junction-to-Case Thermal Resistance ( B JC ) (Note 1)                                                     |
| 28-Pin TQFN...................................................................3 N C/W                     |
| Operating Temperature Range.......................... -40 N C to +85 N C                                  |
| Storage Temperature Range............................ -65 N C to +150 N C                                 |
| Junction Temperature ................................................... +150 N C                         |
| Lead Temperature (soldering, 10s) ................................+300 N C                                |

Note 1: Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a fourlayer board. For detailed information on package thermal considerations, refer to www.maxim-ic.com/thermal-tutorial .

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +4.5V to +5.5V, VL = +2.2V to VCC, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 N C.)

| PARAMETER                           | SYMBOL    | CONDITIONS                                               |   MIN |   TYP | MAX   | UNITS   |
|-------------------------------------|-----------|----------------------------------------------------------|-------|-------|-------|---------|
| Supply Voltage                      | VCC       |                                                          |  +4.5 |       | +5.5  | V       |
| Logic Supply Voltage                | V L       | V L P VCC                                                |  +2.2 |       | VCC   | V       |
| VCC Supply Current                  | ICC       | VCC = +5.5V, V L = +3.6V, SEL_ = H1 = H2 = V1 = V2 = GND |       |     2 | 5     | F A     |
| V L Supply Current                  | I L       | VCC = +5.5V, V L = +3.6V, SEL_ = H1 = H2 = V1 = V2 = GND |       |       | 1     | F A     |
| ANALOG SWITCHES                     |           |                                                          |       |       |       |         |
| On-Resistance (R_, G_, B_)          | R-HF-ON   | V IN = +0.7V, I IN = Q 10mA                              |       |     5 | 8     | I       |
| On-Resistance Match (R_, G_, B_)    | D RON     | 0 P V IN P +0.7V, I IN = -10mA                           |       |       | 1     | I       |
| On-Resistance Flatness (R_, G_, B_) | RFLAT(ON) | 0 P V IN P +0.7V, I IN = -10mA                           |       |   0.5 | 1     | I       |
| Off Leakage Current (R_, G_, B_)    | I OFF     | V R_ , V G_ , V B_ = 0V or VCC                           |    -1 |       | +1    | F A     |
| On-Resistance (SDA_, SCL_)          | R-DDCON   | V IN = +0.7V, I IN = Q 10mA                              |       |    15 |       | I       |
| Off-Leakage Current (SDA_, SCL_)    | I OFF     | V SDA_ , V SCL_ = 0V or V L , VCC = V L = +5V            |    -1 |       | +1    | F A     |

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +4.5V to +5.5V, VL = +2.2V to VCC, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 N C.)

| PARAMETER                             | SYMBOL                                | CONDITIONS                                               | MIN                                   | TYP                                   | MAX                                   | UNITS                                 |
|---------------------------------------|---------------------------------------|----------------------------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| DIGITAL INPUTS (SEL_, H1, H2, V1, V2) | DIGITAL INPUTS (SEL_, H1, H2, V1, V2) | DIGITAL INPUTS (SEL_, H1, H2, V1, V2)                    | DIGITAL INPUTS (SEL_, H1, H2, V1, V2) | DIGITAL INPUTS (SEL_, H1, H2, V1, V2) | DIGITAL INPUTS (SEL_, H1, H2, V1, V2) | DIGITAL INPUTS (SEL_, H1, H2, V1, V2) |
| Input Threshold Low                   | V IL                                  |                                                          | 0.25 x V L                            |                                       |                                       | V                                     |
| Input Threshold High                  | V IH                                  |                                                          |                                       |                                       | 0.55 x V L                            | V                                     |
| Input Hysteresis                      | V HYST                                |                                                          |                                       | 100                                   |                                       | mV                                    |
| Input Leakage Current                 | I L                                   |                                                          | -1                                    |                                       | +1                                    | F A                                   |
| SEL_ Enable/Disable Time              | t ON, t OFF                           | RL = 2.2k I , CL = 10pF, Figure 1                        |                                       | 300                                   |                                       | ns                                    |
| DIGITAL OUTPUTS (H0, V0)              | DIGITAL OUTPUTS (H0, V0)              | DIGITAL OUTPUTS (H0, V0)                                 | DIGITAL OUTPUTS (H0, V0)              | DIGITAL OUTPUTS (H0, V0)              | DIGITAL OUTPUTS (H0, V0)              | DIGITAL OUTPUTS (H0, V0)              |
| Output-Voltage Low                    | V OL                                  | I OUT = 8mA, VCC = +4.5V                                 |                                       |                                       | 0.8                                   | V                                     |
| Output-Voltage High                   | VOH                                   | I OUT = -8mA, VCC = +4.5V                                | 2.4                                   |                                       |                                       | V                                     |
| Rise/Fall Time                        | t R, t F                              | RL = 2.2k I , CL = 10pF, Figure 2                        |                                       |                                       | 8                                     | ns                                    |
| RGB AC PERFORMANCE                    | RGB AC PERFORMANCE                    | RGB AC PERFORMANCE                                       | RGB AC PERFORMANCE                    | RGB AC PERFORMANCE                    | RGB AC PERFORMANCE                    | RGB AC PERFORMANCE                    |
| Bandwidth                             | fMAX                                  | RS = RL = 50 I                                           |                                       | 900                                   |                                       | MHz                                   |
| On-Loss                               | I LOSS                                | f = 10MHz, RS = RL = 50 I , 0 P V P +0.7V, Figure 3      |                                       | 0.4                                   |                                       | dB                                    |
| Crosstalk R_, G_, B_                  | V CT                                  | f = 50MHz, RS = RL = 50 I , Figure 3                     |                                       | -40                                   |                                       | dB                                    |
| Off-Capacitance                       | COFF                                  | f = 1MHz, R0 to R1/R2, G0 to G1/G2, B0 to B1/B2 (Note 2) |                                       | 2.5                                   |                                       | pF                                    |
| On-Capacitance                        | CON                                   | f = 1MHz, R0 to R1/R2, G0 to G1/G2, B0 to B1/B2 (Note 2) |                                       | 5.5                                   | 8                                     | pF                                    |
| ESD PROTECTION                        | ESD PROTECTION                        | ESD PROTECTION                                           | ESD PROTECTION                        | ESD PROTECTION                        | ESD PROTECTION                        | ESD PROTECTION                        |
| R0, G0, B0, SDA0, SCL0, H0, V0        | V ESD                                 | HBM (Notes 2, 3)                                         |                                       | Q 15                                  |                                       | kV                                    |
| R0, G0, B0, SDA0, SCL0, H0, V0        | V ESD                                 | IEC 61000-4-2 Contact (Notes 2, 3)                       |                                       | Q 8                                   |                                       | kV                                    |
| All Other Terminals                   | V ESD                                 | HBM (Note 2)                                             |                                       | Q 2                                   |                                       | kV                                    |

Note 2: Guaranteed by design. Not production tested.

Note 3: Tested terminal to GND, 1µF bypass capacitors on VCC and VL.

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

Typical Operating Characteristics

(VCC = +5.0V, VL = +3.3V, TA = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

Figure 1. Enable/Disable Time

<!-- image -->

Figure 2. Rise/Fall Time

<!-- image -->

Figure 3. Insertion Loss and Crosstalk

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

<!-- image -->

## Pin Description

| PIN    | NAME   | FUNCTION                                                                                        |
|--------|--------|-------------------------------------------------------------------------------------------------|
| 1      | R0     | RGB Red Output (Note 4)                                                                         |
| 2      | G0     | RGB Green Output (Note 4)                                                                       |
| 3      | B0     | RGB Blue Output (Note 4)                                                                        |
| 4      | H0     | Horizontal Sync Output (Note 4)                                                                 |
| 5      | V0     | Vertical Sync Output (Note 4)                                                                   |
| 6      | SDA0   | I 2 C Data Output (Note 4)                                                                      |
| 7      | SCL0   | I 2 C Clock Output (Note 4)                                                                     |
| 8      | SEL2   | Select Input 2. Switches SDA_ and SCL_ signals.                                                 |
| 9      | V L    | Supply Voltage. +2.2V P V L P V CC. Bypass V L to GND with a 1 F F or larger ceramic capacitor. |
| 10, 27 | VCC    | Supply Voltage. VCC = +5.0V Q 10%. Bypass VCC to GND with a 1 F F or larger ceramic capacitor.  |
| 11     | SDA2   | I 2 C Input Data 2 (Note 5)                                                                     |
| 12     | SCL2   | I 2 C Input Clock 2 (Note 5)                                                                    |
| 13     | R2     | RGB Red Input 2 (Note 6)                                                                        |
| 14     | G2     | RGB Green Input 2 (Note 6)                                                                      |
| 15     | B2     | RGB-Blue Input 2 (Note 6)                                                                       |
| 16     | H2     | Horizontal Sync Input 2 (Note 7)                                                                |
| 17     | V2     | Vertical Sync Input 2 (Note 7)                                                                  |
| 18     | I.C.   | Internal Connection. Connect to ground or leave unconnected.                                    |
| 19     | V1     | Vertical Sync Input 1 (Note 7)                                                                  |
| 20     | H1     | Horizontal Sync Input 1 (Note 7)                                                                |
| 21     | B1     | RGB Blue Input 1 (Note 6)                                                                       |

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## Pin Description (continued)

| PIN   | NAME   | FUNCTION                                                         |
|-------|--------|------------------------------------------------------------------|
| 22    | G1     | RGB Green Input 1 (Note 6)                                       |
| 23    | R1     | RGB Red Input 1 (Note 6)                                         |
| 24    | SCL1   | I 2 C Clock Input 1 (Note 5)                                     |
| 25    | SDA1   | I 2 C Data Input 1 (Note 5)                                      |
| 26    | GND    | Ground                                                           |
| 28    | SEL1   | Select Input 1. Switches R_, G_, B_, H_, and V_ signals.         |
| -     | EP     | Exposed Pad. Connect exposed pad to ground or leave unconnected. |

- Note 4: Terminal with Q 15kV HBM protection.

- Note 5: SCL1, SCL2, SDA1, and SDA2 are identical and can be used interchangeably.

- Note 6: R1, R2, G1, G2, B1, and B2 are identical and can be used interchangeably.

- Note 7: H1, H2, V1, and V2 are identical and can be used interchangeably.

## Typical Applications Circuit

<!-- image -->

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## Functional Diagram

<!-- image -->

<!-- image -->

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

## Detailed Description

The  MAX4885AE  integrates  high-bandwidth  analog switches  and  level-translating  buffers  to  implement  a complete  2:1  multiplexer  for  VGA  signals.  The  device provides switching for RGB, HSYNC, VSYNC, SDA, and SCL  signals.  These  signals  are  required  in  notebook VGA switching applications.

The  HSYNC  and  VSYNC  inputs  feature  level-shifting buffers to support 5V-TTL output logic levels from lowvoltage  graphics  controllers.  These  buffered  switches can be driven from +2.0V up to +5.5V. RGB signals are routed  with  high-performance  analog  switches.  SDA\_ and SCL\_ are I 2 C signals with pullups to their respective voltages. The MAX4885AE protects the low-voltage side while effectively translating up to the high-voltage level.

Two  select  inputs  are  provided  to  individually  select groups of switches.

RGB,  HSYNC,  and  VSYNC  signals  are  controlled  by SEL1; and both SDA\_ and SCL\_ signals are controlled by SEL2.

## Table 1. RGB/HV Truth Table

|   SEL1 | FUNCTION                   | FUNCTION          |
|--------|----------------------------|-------------------|
|      0 | R1 to R0 G1 to G0 B1 to B0 | H1 to H0 V1 to V0 |
|      1 | R2 to R0 G2 to G0 B2 to B0 | H2 to H0 V2 to V0 |

## Table 2. DDC Truth Table

|   SEL2 | FUNCTION                  |
|--------|---------------------------|
|      0 | SDA1 to SDA0 SCL1 to SCL0 |
|      1 | SDA2 to SDA0 SCL2 to SCL0 |

<!-- image -->

## RGB Switches

The  MAX4885AE  provides  three  SPDT  high-bandwidth switches to route standard VGA R\_, G\_, and B\_ signals (see Table 1). The R\_, G\_, and B\_ analog switches are identical and any of the three switches can be used to route red, green, or blue video signals. The R0, G0, and B0 outputs are ESD protected to Q 15kV (HBM).

## Horizontal/Vertical Sync Level Shifter

H1, H2, V1, and V2 inputs are buffered to provide levelshifting  and  drive  capability  for  horizontal/vertical  sync signals that meet the VESA specification. The H\_ and V\_ level-shifters are identical, and each level-shifter can be used for either horizontal or vertical signals. The H0 and V0 outputs are ESD protected to Q 15kV (HBM).

## Display-Data Channel Multiplexer

The  MAX4885AE  provides  two  logic-level  translating switches to route DDC signals (see Table 2). VL is normally  set  to  +3.3V  to  provide  logic-shifting  for  VESA I 2 C-compatible  signals.  The  MAX4885AE  protects  the low-voltage graphics controller from +5V that could be present  in  VESA-compatible  monitors.  In  some  applications,  such  as  KVM,  where  logic-level  shifting  is  not required, then VL can be connected to VCC. The SDA\_ and SCL\_ switches are identical, and each switch can be used to route either SDA\_ or SCL\_ signals. The SDA0 and SCL0 outputs are ESD protected to Q 15kV (HBM).

## ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. Additionally, the R0, G0, B0, H0, V0, SDA0, and SCL0 terminals of the MAX4885AE are designed for protection to the following limit: ±15kV using the HBM.

For optimum ESD performance, bypass VCC and VL pins to ground with 1 F F or larger ceramic capacitors as close as possible to these supply pins.

## High-Bandwidth, VGA 2:1 Switch with ±15kV ESD Protection

Figure 4. Human Body ESD Test Model

<!-- image -->

## Human Body Model

Figure 4 shows the HBM, and Figure 5 shows the current waveform it generates when discharged into a lowimpedance state. This model consists of a 100pF capacitor charged to the ESD voltage of interest, which is then discharged into the device through a 1.5k I resistor.

## ESD Test Conditions

ESD performance  depends  on  a  variety  of  conditions. Contact Maxim for a reliability report, test setup, methodology, and results.

## Applications Information

The  MAX4885AE  provides  the  switching  and  levelshifting  necessary  to  drive  a  standard  VGA  port  from either an internal graphics controller or an add-in module (MXM  or  GPU-see Typical  Applications  Circuit ).  The R\_, G\_, and B\_ signals are switched through the three low-capacitance  SPDT  switches.  Internal  buffers  drive the HSYNC and VSYNC signals to VGA standard 5V-TTL levels.  The  DDC  multiplexer  provides  level-shifting. Connect VL to +3.3V for normal operation, or to VCC to disable level-shifting for DDC signals as for KVM application.

Figure 5. Human Body Model Current Waveform

<!-- image -->

## Power-Supply Decoupling

Bypass each VCC pin and VL pin to ground with a 1 F F or larger ceramic capacitor as close as possible to the device.

## PCB Layout

High-speed switches such as the MAX4885AE requires proper PCB layout for optimum performance. Ensure that impedance-controlled PCB traces for high-speed signals are matched in length and as short as possible. Connect the exposed pad to ground or leave unconnected.

## Chip Information

PROCESS: BiCMOS

## Package Information

For the latest package outline information and land patterns,  go  to www.maxim-ic.com/packages .  Note  that a  '+',  '#',  or  '-'  in  the  package  code  indicates  RoHS status only. Package drawings may show a different suffix  character,  but  the  drawing  pertains  to  the  package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 28 TQFN-EP     | T2844+1        | 21-0139        |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10