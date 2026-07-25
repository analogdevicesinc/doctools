<!-- lastmod 2021-04-21 -->
<!-- image -->

## 3.3V LOW NOISE 1:9 FANOUT BUFFER

DC - 4.5GHz

ADH987S

## 1.0 Scope

This specification documents the detail requirements for an internally defined equivalent flow per MIL-PRF-38535 Level V expect as modified herein.

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification.

This data specifically details the space grade version of this product. A more detailed operational description and a complete data sheet for commercial product grades can be found at http://www.analog.com/HMC987

## 2.0 Part Number:

The complete part number(s) of this specification follows:

Specific Part Number

Description

ADH987R701G32

DC to 4.5 GHz, 3.3 V Low Noise 1:9 Fanout Buffer

## 3.0 Case Outline

The case outline is as follows:

| Outline Letter   | Descriptive Designator   | Terminals   | Lead Finish   | Package style                  |
|------------------|--------------------------|-------------|---------------|--------------------------------|
| X                | FR-32-1                  | 32 Lead     | Gold          | Glass/Metal Hermetic SMT (G32) |

ASD0016580                                                                            Rev.  B

Figure 1 Functional Block Diagram 1/

<!-- image -->

1/ Top view of package

Figure 2 - Terminal Connections

| Pin Number     | Terminal Symbol   | Pin Type       | Pin Description                                                                                                                                                                                                               |
|----------------|-------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1              | VCCHF             | Power          | Power Supply                                                                                                                                                                                                                  |
| 2              | CLKP              | Analog Input   | Differential clock inputs                                                                                                                                                                                                     |
| 3              | CLKN              | Analog Input   |                                                                                                                                                                                                                               |
| 4              | SDI               | Digital Input  | Serial port data input                                                                                                                                                                                                        |
| 5              | SDO               | Digital Output | Serial port data output                                                                                                                                                                                                       |
| 6              | PMODE-SEL         | Digital Input  | In Parallel mode (PMODE-SEL =1): Pins (SCLK, SDI, SEN) are interpreted as a control-word which enables different buffers In Serial mode (PMODE-SEL =0): Reg02h enables which buffer combination(s) can be enabled or disabled |
| 7              | RFOUTP            | Analog Output  | Differential RF output buffer signal output                                                                                                                                                                                   |
| 8              | RFOUTN            | Analog Output  |                                                                                                                                                                                                                               |
| 9              | VCCRF             | Power          | Power supply                                                                                                                                                                                                                  |
| 10             | SCLK              | Digital Input  | Serial port clock                                                                                                                                                                                                             |
| 11             | SEN               | Digital Input  | Serial port latch enable                                                                                                                                                                                                      |
| 12             | OUTP8             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 13             | OUTN8             | Analog Output  |                                                                                                                                                                                                                               |
| 14             | OUTP7             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 15             | OUTN7             | Analog Output  |                                                                                                                                                                                                                               |
| 16             | VCCB              | Power          | Power Supply                                                                                                                                                                                                                  |
| 17             | OUTN6             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 18             | OUTP6             | Analog Output  |                                                                                                                                                                                                                               |
| 19             | OUTN5             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 20             | OUTP5             | Analog Output  |                                                                                                                                                                                                                               |
| 21             | OUTP4             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 22             | OUTN4             | Analog Output  |                                                                                                                                                                                                                               |
| 23             | OUTP3             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 24             | OUTN3             | Analog Output  |                                                                                                                                                                                                                               |
| 25             | VCCA              | Power          | Power Supply                                                                                                                                                                                                                  |
| 26             | OUTN2             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 27             | OUTP2             | Analog Output  |                                                                                                                                                                                                                               |
| 28             | OUTN1             | Analog Output  | Differential signal output                                                                                                                                                                                                    |
| 29             | OUTP1             | Analog Output  |                                                                                                                                                                                                                               |
| 30             | REFBUFEN          | Digital Input  | Active high RF buffer enable. The polarity of this control input can be swapped via SPI bit Reg 0x3[4]                                                                                                                        |
| 31             | CEN               | Digital Input  | Hardware Chip Enable. Logic 0 = Power Down Logic 1 = Active                                                                                                                                                                   |
| 32             | GND               | Power          | RF/DC Ground                                                                                                                                                                                                                  |
| Package Bottom | GND               | Power          | RF/DC Ground 1/                                                                                                                                                                                                               |
| Package Lid    |                   | NIC            | No Internal Connection. Package Lid is not connected to RF/DC ground.                                                                                                                                                         |

## ADH987S

## 4.0 Specifications

- 4.1. Absolute Maximum Ratings 1/

VCCHF, VCCRF, VCCA, VCCB to ground   ....................................   -0.3 V to +4 V

Max RF Power on pins CLKP, CLKN  ............................................   +15 dBm single-ended

LVPECL Min Output Load Resistor  ................................................   100 Ohms to GND

LVPECL Output Load Current   .......................................................   40 mA/Leg

Digital Load  ...................................................................................   1 k

Ω

Min

Digital Input Voltage Range ...........................................................   -0.3 V to 3.6 V

Thermal Resistance (Junction to ground paddle)  .........................   18.8

°

C/W

Operating Temperature Range   ......................................................   -40

°

C to +85

°C

Storage Temperature Range   .........................................................   -65

°

C to +125

°

C

Maximum Junction Temperature  ...................................................   +125

⁰

C

ESD Sensitivity (HBM)………………………………………………..  Class 1B

- 4.2. Recommended Operating Conditions

Supply voltage (VCCHF = VCCRF = VCCA = VCCB)  ..................   +3.3 V (Regulated) Ambient operating temperature range (TA)…………………………. -40 ° C to +85 ° C

- 4.3. Nominal Operating Performance Characteristics  2/

Max Vil   ...........................................................................................   1.1 V

Min Vih   .........................................................................................   2.0 V

Max Vol   ..........................................................................................   0.4 V

Min Voh   ........................................................................................   2.3 V

Single-Ended Input Impedance (Selectable)   ...............................   50 / 150 Ω Output Third Order Intercept (IP3) (16GHz - 18GHz ) ....................25 dBm

- 4.4. Radiation Features

Maximum total dose available (dose rate = 50 - 300 rads (Si)/s)…. 100 krads (Si) Single event phenomenon (SEP):

No single event latchup (SEL) occurs at effective linear energy transfer (LET)   ......................................................................  &lt; 80 MeV-cm2/mg 3/

1/ Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device.  This is a stress rating only; functional operation of the device at these or any other conditions outside of those indicated in the operation sections of this specification is not implied.  Exposure to absolute maximum ratings for extended periods may affect device reliability.

2/ All typical specifications are at TA = 25 °C and regulated VDD of 3.3 V, unless otherwise noted.

3/ Limits are characterized at initial qualification and after any design or process changes that may affect the SEP characteristics, but are not production tested unless specified by the customer through purchase order or contract.  For more information on single event effect (SEE) test results, customers are requested to contact ADI.

TABLE IA - ELECTRICAL PERFORMANCE CHARACTERISTICS (VDD = +3.3 V)

| Parameter See notes at end of table   | Symbol   | Conditions 1/ Unless otherwise specified   | Sub-Group   |   Limit Min |   Limit Max | Units   |
|---------------------------------------|----------|--------------------------------------------|-------------|-------------|-------------|---------|
| Frequency = 0.5GHz 3/                 |          |                                            |             |             |             |         |
| OUTP1 & OUTN1                         |          |                                            | 4           |        -0.5 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -1.5 |             | dBm     |
| RF Buffer RFOUTP & RFOUTN             |          |                                            | 4           |        -0.5 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -1.5 |             | dBm     |
| Frequency = 1.5GHz 2/                 |          |                                            |             |             |             |         |
|                                       |          |                                            | 4           |        -1.5 |             | dBm     |
| OUTP1-8 & OUTN1-8                     |          | RF Pin = -10 dBm                           | 5, 6        |        -2.5 |             | dBm     |
| Output Power                          | Pout     |                                            | 4           |        -0.5 |             | dBm     |
|                                       |          | RF Pin = +5 dBm                            | 5, 6        |        -1.5 |             | dBm     |
|                                       |          |                                            | 4           |        -0.5 |             | dBm     |
| RF Buffer RFOUTP & RFOUTN             | Pout     |                                            | 5, 6        |        -1.5 |             | dBm     |
| Output Power                          |          | RF Pin = -10 dBm                           | 4           |         1.0 |             | dBm     |
|                                       | Pout     | RF Pin = +5 dBm                            | 5, 6        |         0.0 |             | dBm     |
| Frequency = 2.5GHz 3/                 |          |                                            |             |             |             |         |
| OUTP1 & OUTN1                         |          |                                            | 4           |        -3.0 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -4.0 |             | dBm     |
| RF Buffer RFOUTP & RFOUTN             |          |                                            | 4           |        -0.5 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -1.5 |             | dBm     |
| Frequency = 3.5GHz 3/                 |          |                                            |             |             |             |         |
| OUTP1 & OUTN1                         |          |                                            | 4           |        -4.0 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -5.0 |             | dBm     |
| RF Buffer RFOUTP & RFOUTN             |          |                                            | 4           |        -2.0 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -3.0 |             | dBm     |
| Frequency = 4.5GHz 3/                 |          |                                            |             |             |             |         |
| OUTP1 & OUTN1                         |          |                                            | 4           |        -6.0 |             | dBm     |
| Output Power                          | Pout     | RF Pin = -10 dBm                           | 5, 6        |        -7.0 |             | dBm     |
| RF Buffer RFOUTP & RFOUTN             |          |                                            | 4           |        -6.0 |             | dBm     |
| Power                                 | Pout     | RF Pin = -10 dBm                           |             |             |             |         |
| Output                                |          |                                            | 5, 6        |        -7.0 |             | dBm     |
| Noise                                 |          |                                            |             |             |             |         |
| Harmonics 7/                          | Fo       | RF Pin = 6 dBm, 4.2 GHz 3/4/               | 4,5,6       |        -5.0 |             | dBm     |
|                                       | 2Fo      |                                            | 4,5,6       |             |         -16 | dBc     |
|                                       | 3Fo      |                                            | 4,5,6       |             |         -27 | dBc     |
|                                       | 4Fo      |                                            | 4,5,6       |             |         -34 | dBc     |
|                                       | 5Fo      |                                            | 4,5,6       |             |         -36 | dBc     |
| Phase Noise Floor                     |          | RF Pin = 3 dBm, 4.2 GHz 3/ 4/              | 4,5,6       |             |        -157 | dBc/Hz  |
|                                       | PNF      | RF Pin = 6 dBm, 4.2 GHz 4/                 | 4,5,6       |             |        -159 | dBc/Hz  |
|                                       |          | 5/ RF Pin = 6 dBm, 2 GHz 4/ 5/6/           | 4,5,6       |             |        -155 | dBc/Hz  |
| Quiescent                             |          |                                            |             |             |             |         |
| Supply Current                        | Idd      | All Ports On                               | 1, 2, 3     |             |         440 |         |
|                                       |          | MDPL                                       | 1           |             |         440 | mA      |
| Power Down Current 8/                 |          | CEN = 0 V                                  | 1           |             |           2 | uA      |
|                                       | IDDQ     | MDPL                                       | 1           |             |           2 | uA      |
| Digital Input Leakage Current 8/      | IIH      | V I = 2 V                                  | 1           |         -10 |          10 | uA      |
|                                       |          | MDPL                                       | 1           |         -10 |          10 | uA      |
|                                       | IIL      | V I = 0 V                                  | 1           |         -10 |          10 | uA      |
|                                       |          | MDPL                                       | 1           |         -10 |          10 | uA      |

TABLE IA NOTES:

## ADH987S

- 1/ VDD (VCCHF = VCCA = VCCB = VCCRF = 3.3V nom), TA nom = +25 ºC, TA max = +85 ºC, TA min = -40 ºC, Continuous wave single-ended AC coupled clock input with 200 Ω LVPECL termination, Unused clock input decoupled to GND with 100 pF unless otherwise noted.
- 2/ Clock input driven on CLKP and CLKN.
- 3/ Clock input driven on CLKP input only.
- 4/ Output not corrected for board, cable and adapter loss
- 5/ Clock input driven differentially. Outputs are single-ended.
- 6/ Measurement on RFOUT pins. See RF Output Buffer Phase Noise Floor at 2 GHz vs. Input Power plot in Section 7
- 7/ Parameter not tested post irradiation.  Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent lots.
- 8/ Limits are characterized at initial qualification and after any design or process changes that may affect the TID characteristics, but are not Production tested unless specified by the customer through purchase order or contract.  For more information on total ionizing dose (TID) test results, customers are requested to contact ADI.

## TABLE IIA - ELECTRICAL TEST REQUIREMENTS:

| Table IIA                               | Table IIA                                               |
|-----------------------------------------|---------------------------------------------------------|
| Test Requirements                       | Subgroups (in accordance with MIL-PRF-38535, Table III) |
| Interim Electrical Parameters           | 1, 4                                                    |
| Final Electrical Parameters             | 1,4 1/ 2/                                               |
| Group A Test Requirements               | 1,2,3, 4,5,6                                            |
| Group C end-point electrical parameters | 1, 4 2/                                                 |
| Group Dend-point electrical parameters  | 1, 4                                                    |
| Group E end-point electrical parameters | 1 3/                                                    |

Table IIA Notes:

1/ PDA applies to Table I subgroup 1 and Table IIB delta parameters.

2/ See Table IIB for delta parameters

3/ Parameters noted in Table I are not tested post irradiation.

## TABLE IIB - BURN-IN / LIFE TEST DELTA LIMITS 1/ 2/ 3/

| Table IIB                           | Table IIB                                 | Table IIB   | Table IIB   | Table IIB   |
|-------------------------------------|-------------------------------------------|-------------|-------------|-------------|
| Parameter                           | Test Conditions                           | Symbol      | Delta       | Units       |
| OUTP1-8 & OUTN1-8 Output Power      | Pin = -10 dBm, Single Ended AC CLKP Input | Pout        | ± 1.0       | dB          |
| OUTP1-8 & OUTN1-8 Output Power      | Pin = -10 dBm, Single Ended AC CLKN Input | Pout        | ± 1.0       | dB          |
| OUTP1-8 & OUTN1-8 Output Power      | Pin = +5 dBm, Single Ended AC CLKP Input  | Pout        | ± 1.0       | dB          |
| OUTP1-8 & OUTN1-8 Output Power      | Pin = +5 dBm, Single Ended AC CLKN Input  | Pout        | ± 1.0       | dB          |
| Buffer RFOUTP & RFOUTN Output Power | Pin = -10 dBm, Single Ended AC CLKP Input | Pout        | ± 1.0       | dB          |
| Buffer RFOUTP & RFOUTN Output Power | Pin = -10 dBm, Single Ended AC CLKN Input | Pout        | ± 1.0       | dB          |
| Buffer RFOUTP & RFOUTN Output Power | Pin = +5 dBm, Single Ended AC CLKP Input  | Pout        | ± 1.0       | dB          |
| Buffer RFOUTP & RFOUTN Output Power | Pin = +5 dBm, Single Ended AC CLKN Input  | Pout        | ± 1.0       | dB          |
| Supply Current                      | All Ports On, No RF Input signal          | Icc         | ± 10        | %           |

## ADH987S

## 5.0 Burn-In Life Test, and Radiation

## 5.1. Burn-In Test Circuit, Life Test Circuit

- 5.1.1.  The test conditions and circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing or acquiring activity upon request.  The test circuit shall specify the inputs, outputs, biases, and power dissipation, as applicable, in accordance with the intent specified in method 1015 test condition D of MIL -STD-883.
- 5.1.2.  HTRB is not applicable for this drawing.

## 5.2. Radiation Exposure Circuit

- 5.2.1.  The radiation exposure circuit shall be maintained by the manufacturer under document revision level control and shall be made available to the preparing and acquiring activity upon request. Total dose irradiation testing shall be performed in accordance with MIL-STD-883 method 1019, condition A.

## 6.0 MIL-PRF-38535 QMLV Exceptions

The manufacturing flow described in the RF &amp; MICROWAVE STANDARD SPACE LEVEL PRODUCTS PROGRAM is to be considered a part of this specification. The brochure describes standard QMLV exceptions for Aerospace products run at the ADI Chelmsford, MA facility

- 6.1. Wafer Fabrication

Foundry information is available upon request.

- 6.2. Device Assembly

Device contains bi-metallic wire bonds (Gold bond wires on Aluminum die pads).

- 6.3. Group D

Group D-5 Salt Atmosphere testing is not performed.

## 7.0 Application Notes

## ADH987S

<!-- image -->

- 1/ Output not corrected for board, cable and adapter loss. Clock input driven differentially. Outputs are single-ended. Not tested post irradiation.

Parameter is part of device initial characterization which is only repeated after design and process changes or with subsequent lots.

## PARALLEL PORT CONTROL

The various outputs of the can be enabled/disabled by using parallel pin control, or via the SPI. In parallel-mode (PMODE-SEL = 1), the SPI input pins (SCLK, SDI, SEN) are re-interpreted as a 3-bit control bus, and enable the LVPECL drivers according to the following truth table.

```
SCLK, SDI, SEN 000: OUT 2 001: OUT 2 + OUT 7 010: OUT 2 + OUT 7 + OUT 4 011: OUT 2 + OUT 7 + OUT 4 + OUT 6 100: OUT 2 + OUT 7 + OUT 4 + OUT 6 + OUT 5 101: OUT 2 + OUT 7 + OUT 4 + OUT 6 + OUT 5 + OUT 3 110: OUT 2 + OUT 7 + OUT 4 + OUT 6 + OUT 5 + OUT 3 + OUT 8 111: OUT 2 + OUT 7 + OUT 4 + OUT 6 + OUT 5 + OUT 3 + OUT 8 + OUT 1
```

Under SPI control (PMODE-SEL = 0, see section 'Register Map' for the register map and SPI protocol details), there is slightly more flexibility in that any combination of buffers can be enabled or disabled via the individual buffer enable bits in Reg 0x2.

The part features switches on both the input and output signals, so that when the part is disabled (via either the CEN pin, or the SPI control bit Reg 0x1[0]), the powerdown current drops to &lt; 2 μA, regardless of the IO termination scheme.

## INPUT STAGE

The input stage, Figure 2, is flexible. It can be driven single-ended or differential, with LVPECL, LVDS, or CML signals. If driven single-ended, a large AC coupling cap to ground should be used on the undriven input. The input impedance is selectable, via Reg 0x 3[3], between 50 Ω or 150 Ω single ended(100 Ω or 300 Ω d ifferential). The DC bias level of 2.0 V can be generated internally by programming Reg 0x03[1]=1 (default configuration), supplied externally, or generated via an LVPECL termination network inside the part.

## CHIP ENABLE

The ADH987S has a chip enable feature, (CEN) which can be used to power down or deactivate the LVPECL and RF outputs. This can be done with either the CEN device pin (pin 31,) or with a SPI command to Reg 0x01[0].

The ADH987S enters power-down when a logic 0 is applied to the CEN pin. However, SPI commands can still be written and are recognized when a logic 1 is applied to CEN. Note, there is no internal pull-up or pull-down and this pin must be terminated. To control the chip enable feature via SPI, the first bit in Reg 0x01 is set to the desired state. Setting this bit to 1, which is the default mode, enables the outputs. Setting this bit to 0 disables the outputs.

Figure 3 Input Stage

<!-- image -->

ASD0016580 Rev. B | Page 10 of 20

<!-- image -->

Figure 4 DC Coupled CML Interface                                                      Figure 5 DC coupled CMOS Interface

<!-- image -->

<!-- image -->

Figure 6 DC Coupled LVPECL Interface                               Figure 7 AC Coupled Differential CML / LVPECL /LVDS / CMOS Interface

Figure 8 AC Coupled Single-Ended CML / LVPECL / LVDS / CMOS Interface

<!-- image -->

## LVPECL OUTPUT STAGE

The LVPECL output driver produces up to 1.6 Vppd swi ng into 100 Ω differential loads. LVPECL drivers are terminated with off-chip resistors that provide the DC current through the emitter-follower output stage. The output stage has a switch which disconnects the output driver from the load when not used. The switch series resistor significantly improves the output match when driving into 50 Ω transmission lines. The switch series resistor causes a small DC level shift and swing degradation, depending on the termination current.  If unused, disabled LVPECL outputs can be left floating, terminated, or grounded.

Figure 9 Output Stage

<!-- image -->

<!-- image -->

Figure 10 DC Coupled to LVPECL Interface                          Figure 11 AC coupled to LVDS / CML / LVPECL /CMOS

<!-- image -->

Figure 12 DC Coupled to CMOS Interface

<!-- image -->

The user has several choices in how they connect LVPECL drivers and receivers, and many resources that deal with this issue in detail. As a quick introduction, there are compromises between matching performance, common mode levels, and signal swing. For clocking applications, the user often has the luxury of using AC coupling, unlike in many data-path situations. Figure 12 shows a simplified interface schematic between an LVPECL output and input stage. Various options and trade-offs for the termination components are provided in Table III. The evaluation board allows flexibility in how the I/Os are configured, and allows the configuration in Figure 10, among many others.

Figure 13 Recommended Interface Diagram

<!-- image -->

## ADH987S

## ADH987S

## TABLE III.  INTERFACE  VALUES

| Rs - Used to increase Roto match to 50Ω environmentalready has - 10Ω internally   | Rs - Used to increase Roto match to 50Ω environmentalready has - 10Ω internally   |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| 0Ω                                                                                | EVB: Largest signal swing,lowest common mode shift                                |
| 10Ω                                                                               | Better S22                                                                        |
| RL - DCcurrent termination forLVPECL output stage                                 | RL - DCcurrent termination forLVPECL output stage                                 |
| 120Ω                                                                              | EVB default: Standard LVPECL termination voltages                                 |
| 200Ω                                                                              | Reduced current, no performance degradation                                       |
| 300Ω                                                                              | Further reduced current,lower output power but flatter frequency response         |
| OPEN                                                                              | If using internal DC termination network at the Rx                                |
| Cac- ACcoupling cap                                                               | Cac- ACcoupling cap                                                               |
| BIG CAP                                                                           | EVB default: Ifusing ACcoupling                                                   |
| SHORT                                                                             | If using internal DC termination network at the Rx                                |

## RF OUTPUT STAGE

The RF output buffer is a CML output stage with 50 Ω impedance (single -ended) and adjustable power. In parallel mode (the PMODE\_SEL pin = 1), it is at max gain (~ +3 dBm single-ended), whereas under SPI control, the gain can be lowered in ~3 dB steps down to -9 dBm single-ended. See Reg 0x04 for more information.

Figure 14 Output Stage

<!-- image -->

## SERIAL PORT INTERFACE (SPI) CONTROL

The ADH987G32 can be controlled via SPI or parallel port control (for more information on parallel control see 'Parallel Port Control'). SPI control offers more flexibility than parallel port control. The external pin PMODE-SEL = 1 configures the for parallel port operation, while PMODE-SEL = 0 enables SPI control.

The SPI control must be used to re-configure the input bias network from its default state (Reg03h), to adjust the output power control on the RF/CML buffer, and to individually enable arbitrary LVPECL outputs.

## OPERATIONAL MODES

Serial Port Interface features:

- a. Compatibility with general serial port protocols that use a shift and strobe approach to communication.
- b. Compatible with multi-Chip solutions, useful to address multiple chips of various types from a single serial port bus.

## SERIAL PORT WRITE OPERATION

## TABLE IV. SPI OPEN  MODE- WRITE TIMING CHARACTERISTICS

| Parameter   | Conditions                            | Min   |   Typ | Max   | Units   |
|-------------|---------------------------------------|-------|-------|-------|---------|
| t1          | SDI setup time                        | 3     |       |       | ns      |
| t2          | SDI hold time                         | 3     |       |       | ns      |
| t3          | SEN low duration                      | 10    |       |       | ns      |
| t4          | SEN high duration                     | 10    |       |       | ns      |
| t5          | SCLK 9 Rising Edge to SEN Rising Edge | 10    |       |       | ns      |
|             | Serial port Clock Speed               | DC    |    50 |       | MHZ     |
| t6          | SEN to SCLK Recovery Time             | 10    |       |       | ns      |

A typical  WRITE cycle  is shown in Figure 14.

- a. The Master  (host) places 9 bit data, d8:d0, MSB first, on SDI on the first 9 falling edges  of SCLK.
- b. The slave shifts in data on SDI on the  first 9 rising edges  of SCLK
- c. Master places  4 bit register  address  to be written to, r3:r0, MSB first, on the next 4 falling edges of SCLK (10-13)
- d. Slave shifts the register address bits on the next 4 rising edges of SCLK  (10-13).
- e. Master places 3 bit chip address, a2:a0, MSB first, on the next 3 falling  edges of SCLK (14-16). The chip address is fixed at 001.
- f. Slave shifts the chip address bits on the 3 rising edges  of SCLK (14-16).
- g. Master asserts  SEN after the 16th rising edge of SCLK.
- h. Slave registers the SDI data on the rising edge of SEN.

Figure 15 SPI Timing  Diagram, Write Operation

<!-- image -->

## ADH987S

## SERIAL PORT READ OPERATION

To ensure  correct  read operation a pull-down resistor  to ground  (~12kΩ) is recommended on the Serial Data Out  ( S D O )   line.  A typical READ  cycle  is shown  in Figure  15.

In  general,  SDO  line  is  always  active  during  the  WRITE  cycle.  SDO  contains  the  data  from  the  addresses pointed to by Reg 0x00. If Reg 0x00 is not changed, the same  data is always  present on the  SDO. If it is desired to  READ from a specific  address, it is necessary to  write the desired address  to Reg 0x00 in the first write cycle, then in the next SPI cycle,  the desired  data ison SDO pin.

An example of the two-cycle procedure to read from any random address is as follows:

The Master (host), on the first 9 falling edges of SCLK places 9 bit data, d8:d0, MSB first, on SDI as shown in Figure 15 d8:d4 should be set to zero. d3:d0 = address of the register to be READ on the next cycle.

- a. The slave () shifts in data on SDI on the first 9 rising edges of SCLK
- b. Master places 4 bit register address, r3:r0, (the address the WRIT E ADDRESS register), MSB first, on the next 4 falling edges of SCLK (10-13). r3:r0=0000.
- c. Slave shifts the register bits on the next 4 rising edges of SCLK (10-13).
- d. Master places 3 bit chip address, a2:a0, MSB first, on the next 3 falling edges of SCLK (14-16). The chip address is fixed at 001.
- e. Slave shifts the chip address bits on the next 3 rising edges of SCLK (14-16).
- f. Master asserts SEN after the 16th rising edge of SCLK.
- g. Slave registers the SDI data on the rising edge of SEN.
- h. Master clears SEN to complete the address transfer of the two part READ cycle.
- i. If writing data to the chip at the same time as we do the second cycle is not wanted, then it is recommended to simply rewrite the same contents on SDI to Register zero on the READ back part of the cycle.
- j. Master places the same SDI data as the previous cycle on the next 16 falling edges of SCLK .
- k. Slave () shifts the SDI data on the next 16 rising edges of SCLK .
- l. Slave places the desired data (i.e. data from address in Reg00h[3:0]) on SDO on the next 16 rising edges of SCLK.
- m.  Master asserts SEN after the 16th rising edge of SCLK to complete the cycle.

Note  that  if  the  chip  address  bits  are  unrecognized  (a2:a0),  the  slave  will  tri-state  the  SDO  output  to  prevent  a possible bus contention issue.

## TABLE V. SPI OPEN MODE - READ TIMING CHARACTERISTICS

Figure 16 SPI Diagram, Read Operation 2- Cycles

| Parameter   | Conditions                             |   Min | Typ          | Max   | Units   |
|-------------|----------------------------------------|-------|--------------|-------|---------|
| t1          | SDI setup time                         |     3 |              |       | ns      |
| t2          | SDI hold time                          |     3 |              |       | ns      |
| t3          | SEN low duration                       |    10 |              |       | ns      |
| t4          | SEN high duration                      |    10 |              |       | ns      |
| t5          | SCLK Rising Edge to SDO time           |       | 8.2+0.2ns/pF |       | ns      |
| t6          | SEN to SCLK Recovery Time              |    10 |              |       | ns      |
| t7          | SCLK 16 Rising Edge to SEN Rising Edge |    10 |              |       | ns      |

<!-- image -->

<!-- image -->

## ADH987S

| ADH987S   |
|-----------|

REGISTER MAP

## TABLE VI. REG 0x00 ID READ REGISTER

| Bit   | Name         |   Width | Default   | Description                                          |
|-------|--------------|---------|-----------|------------------------------------------------------|
| [3:0] | Read Control |       4 |           | Enter Register Address to be Read From               |
| [4]   | Soft Reset   |       1 | 0         | 1: Reset, Registers are set to the Default Condition |
| [8:0] | Chip ID      |       9 | 0x197     | Reading register 00 will return the Chip ID, 0x197   |

TABLE VII. REG 0x01 MASTER ENABLE

| Bit   | Name               |   Width |   Default | Description             |
|-------|--------------------|---------|-----------|-------------------------|
| [0]   | Master Chip Enable |       1 |         1 | 1= Active, 0=Power Down |

TABLE VIII. REG 0x02 INDIVIDUAL ENABLES

| Bit   | Name   |   Width |   Default | Description     |
|-------|--------|---------|-----------|-----------------|
| [0]   | en1    |       1 |         1 | Enable Buffer 1 |
| [1]   | en2    |       1 |         1 | Enable Buffer 2 |
| [2]   | en3    |       1 |         1 | Enable Buffer 3 |
| [3]   | en4    |       1 |         1 | Enable Buffer 4 |
| [4]   | en5    |       1 |         1 | Enable Buffer 5 |
| [5]   | en6    |       1 |         1 | Enable Buffer 6 |
| [6]   | en7    |       1 |         1 | Enable Buffer 7 |
| [7]   | en8    |       1 |         1 | Enable Buffer 8 |

TABLE IX. REG 0x03 RX BUFFER CONFIGURATION

| Bit   | Name        |   Width |   Default | Description                                                                                               |
|-------|-------------|---------|-----------|-----------------------------------------------------------------------------------------------------------|
| [0]   |             |       1 |         0 | Reserved 0                                                                                                |
| [1]   | DC Internal |       1 |         1 | Use internal DC bias string                                                                               |
| [2]   | DC LVPECL   |       1 |         0 | Use internal LVPECL Rx termination                                                                        |
| [3]   | Zin 50      |       1 |         1 | Input termination select 1 - 50 Ωsingle-ended, 100 Ωdifferential 0 - 150 Ωsingle-ended, 300 Ωdifferential |
| [4]   | RFBUF XOR   |       1 |         0 | Toggle (XOR with RFBUFEN pin) the internal RF Buffer on/off                                               |
| [8:5] |             |       4 |         0 | Reserved 0                                                                                                |

TABLE X. REG 0x04 GAIN SELECT

| Bit   | Name           |   Width |   Default | Description                                                                                                               |
|-------|----------------|---------|-----------|---------------------------------------------------------------------------------------------------------------------------|
| [2:0] | RF Buffer Gain |       3 |         7 | 0: Disabled 1: -9 dBmsingle-ended 2: - 6 dBmsingle-ended 3: -3 dBmsingle-ended 4: 0 dBmsingle-ended >4: 3 dBmsingle-ended |

TABLE XI. REG 0x05 BIASES

| Bit   | Name     |   Width |   Default | Description   |
|-------|----------|---------|-----------|---------------|
| [1:0] | Reserved |       2 |         2 | Reserved - 2  |
| [3:2] | Reserved |       2 |         2 | Reserved - 2  |
| [5:4] | Reserved |       2 |         3 | Reserved - 3  |
| [8:6] | Reserved |       3 |         0 | Reserved - 0  |

## ADH987S

## 8.0 Package Outline Dimensions

The G32 package and outline dimensions can be found at http://www.analog.com or upon request.

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description              | Package Option   |
|---------------|---------------------|----------------------------------|------------------|
| ADH987R701G32 | -40°C to +85°C      | 32 Lead Glass/Metal Hermetic SMT | G32( FR-32-1)    |

G32( FR-32-1)

| Revision History   | Revision History                                                                 | Revision History   |
|--------------------|----------------------------------------------------------------------------------|--------------------|
| Rev                | Description of Change                                                            | Date               |
| A                  | Initial Release                                                                  | 7/31/2019          |
| B                  | Delete ADH987L701G32 and add ADH987R701G32. Remove Table IIA Group E Subgroup 4. | 4/8/2021           |

<!-- image -->