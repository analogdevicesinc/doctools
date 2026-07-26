<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5941B evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board featuring an Ethernet port, network powered device (PD) interface and DC-DC PWM controller circuit for -48V systems. The MAX5941B is used in power-over-LAN applications requiring a DC-DC, fixed-frequency, isolated power supply from an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The MAX5941B EV kit receives power from IEEE 802.3af-compliant power sourcing equipment (PSE). Refer to the MAX5922 and MAX5935 data sheets for PSE controllers. The PSE provides the required -44V to -57V DC power over an unshielded, twisted-pair Ethernet network cable to the EV kit. The EV kit features a 10/100BASE-TX voice over IP (VoIP) magnetic module and separate diode bridges for separating the DC power from the module provided by an endspan/endpoint or midspan Ethernet system.

The MAX5941B EV kit demonstrates the PD interface and DC-DC PWM features. The EV kit also demonstrates the full  functionality  of  the  MAX5941B. Features such as PD detection signature, configurable PD classification signature, programmable inrush current, and programmable undervoltage lockout (UVLO) can be evaluated. All of these features are configurable on the EV kit.

The MAX5941B EV kit also features a galvanically isolated, 13.2W, 275kHz switching frequency DC-DC converter,  which uses the MAX5941B current-mode PWM controller  section of the IC. Power for the forward DC-DC converter circuit is provided from the MAX5941B's -48V output, or from a local input DC supply, such as a wall cube. The DC-DC converter is configured for an output voltage of +3.3V and provides up to 4A. High efficiency (up to 85%) is achieved using a single transistor, forward DC-DC converter topology on the primary side, and synchronous rectifiers on the secondary side. The surfacemount transformer provides up to 1500VRMS galvanic isolation for the output. UVLO, soft-start, and current limit provide a robust 13.2W isolated power supply.

Warning: The MAX5941B EV kit is designed to operate with high voltages. Dangerous voltages are present in this EV kit and in equipment connected to it. Users who power up this EV kit, or power the sources connected to it, must follow safety procedures appropriate for working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this kit with care to avoid possible personal injury.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ IEEE 802.3af-Compliant PD Interface Circuit
- ♦ PD Detection and Configurable Classification Signatures
- ♦ Programmable Inrush Current Limit
- ♦ Programmable UVLO
- ♦ Isolated 13.2W Forward DC-DC Converter
- ♦ -36V to -60V Input Range
- ♦ Isolated +3.3V Output at 4A
- ♦ Receives Power from Endspan and Midspan Ethernet Systems
- ♦ -48V Power Interface for an External DC-DC Converter
- ♦ Local Power Inputs (Wall Cube)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX5941BEVKIT | 0°C to +70°C | 16 SO        |

## MAX5941B Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1            |     1 | 0.068µF ± 10%, 100V X7R ceramic capacitor (1210) Murata GRM32NR72A683K         |
| C2            |     1 | 6800pF ± 10%, 100V X7R ceramic capacitor (0805) Murata GRM219R72A682K          |
| C3            |     1 | 1000pF ± 10%, 250VAC X7R UL ceramic capacitor (2010) Murata GA352QR7GF102KW01L |
| C4, C5        |     2 | 0.01µF ± 10%, 100V X7R ceramic capacitors (0805) Murata GRM21BR72A103K         |
| C6            |     1 | 680pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H681K               |
| C7            |     1 | 4700pF, 250VAC X7R ceramic capacitor (2220) Murata GA355DR7GC472KY02           |
| C8            |     1 | 1µF ± 10%, 100V X7R ceramic capacitor (1210) AVX 1210C105KAT9A                 |
| C9            |     1 | 1µF ± 10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C105K                 |
| C10           |     1 | 100pF ± 10%, 50V C0G ceramic capacitor (0603) Murata GRM188I5C1H101J           |
| C11           |     1 | 180µF ± 20%, 4V aluminum organic capacitor (X) Panasonic EEFUE0G181R           |
| C12           |     1 | 0.1µF, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K                  |
| C14           |     1 | 0.22µF ± 10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C224K           |
| C15           |     1 | 1µF ± 10%, 10V X7R ceramic capacitor (0805) Murata GRM21BR71A105K              |

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                                          |
|-----------------|-------|------------------------------------------------------------------------------------------------------|
| C13, C16        |     0 | Not installed, ceramic capacitors (0603)                                                             |
| C17             |     1 | 10µF, 50V electrolytic capacitor (6.3mm x 6.0mm) Sanyo 50CV10AX                                      |
| C18             |     1 | 1.0µF ± 10%, 50V X7R ceramic capacitor (1206) TDK C3216X7R1H105K                                     |
| C19             |     1 | 47µF ± 20%, 100V electrolytic capacitor (12.5mm x 13.5mm) Sanyo 100CV47FS                            |
| C20             |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K                                  |
| D1              |     1 | 56.7V, 600W transient voltage suppressor (SMB) Vishay SMBJ51A                                        |
| D2              |     0 | Not installed, 1A, 100V standard- recovery power rectifier (SMA) Diodes Incorporated S1B recommended |
| D3              |     1 | 1A, 100V standard-recovery power rectifier (SMA) Diodes Incorporated S1B                             |
| D4, D5          |     2 | 1A , 200V standard-recovery power rectifiers (DFS-case) Vishay DF02SA                                |
| D6-D9, D15, D17 |     6 | 100mA, 80V switching diodes (SOD323) Diodes Incorporated 1N4148WS                                    |
| D10             |     1 | 30V, 250mW zener diode (SOD323) Central Semiconductor CMDZ5256B                                      |
| D11             |     0 | Not installed, switching diode (SOD323)                                                              |
| D12, D13, D14   |     3 | 200mA, 200V power diodes (SMINI2) Panasonic MA115                                                    |
| D16             |     1 | 3A, 30V Schottky diode (SMA) Diodes Incorporated B330A                                               |
| D18             |     1 | 30V, 500mW zener diode (SOD-123) Diodes Inc. BZT52C30                                                |
| J1              |     1 | RJ-45 black through hole connector, 8P-8C                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU1           |     1 | 3-pin header                                                          |
| JU2           |     1 | 5-pin header                                                          |
| L1            |     1 | 12µH, 5.2A inductor Coilcraft DO5010P-123HC                           |
| L2            |     1 | 3.3mH, 24mA inductor Coilcraft DS1608-335                             |
| N1            |     1 | 200V, 9.4A n-channel MOSFET (D-PAK) International Rectifier IRFR9N20D |
| N2            |     1 | 30V, 21A n-channel MOSFET (D-PAK) Fairchild FDD6630A                  |
| N3            |     1 | 20V, 37A n-channel MOSFET (D-PAK) International Rectifier IRLR3714Z   |
| N4            |     1 | 30V, 1.4A n-channel MOSFET (SOT23) Fairchild NDS351AN                 |
| Q1, Q3        |     2 | 60V, 200mA npn transistors (SOT23) Central Semiconductor CMPT3904     |
| Q2            |     1 | 60V, 600mA pnp transistor (SOT23) Central Semiconductor CMPT2907A     |
| R1            |     0 | Not installed, resistor (1206)                                        |
| R2            |     0 | Not installed, resistor (0805)                                        |
| R3            |     1 | 25.5k Ω ± 1% resistor (1206)                                          |
| R4            |     1 | 10k Ω ± 1%, 100ppm thick film resistor (0805) Panasonic ERJ6ENF1002V  |
| R5            |     1 | 732 Ω ± 1%, 100ppm thick film resistor (1206) Panasonic ERJ8ENF7320V  |
| R6            |     1 | 392 Ω ± 1%, 100ppm thick film resistor (1206) Panasonic ERJ8ENF3920V  |
| R7            |     1 | 255 Ω ± 1%, 100ppm thick film resistor (1206) Panasonic ERJ8ENF2550V  |
| R8            |     1 | 178 Ω ± 1%, 100ppm thick film resistor (1812) Panasonic ERJ12NF1780U  |
| R9            |     1 | 2.0k Ω ± 1% resistor (0805)                                           |
| R10           |     1 | 100k Ω ± 5% resistor (0805)                                           |
| R11           |     1 | 0 Ω ± 5% resistor (0805)                                              |
| R12, R13      |     2 | 75 Ω ± 5% resistors (0805)                                            |
| R14, R15      |     2 | 0.56 Ω ± 1% resistors (1206) Panasonic ERJ8BQFR56V                    |

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------|
| R16           |     1 | 160k Ω ± 5% resistor (0603)                                                                               |
| R17           |     1 | 4.12k Ω ± 1% resistor (0603)                                                                              |
| R18           |     1 | 221 Ω ± 1% resistor (0603)                                                                                |
| R19           |     1 | 2.49k Ω ± 1% resistor (0603)                                                                              |
| R20, R21, R36 |     3 | 4.7 Ω ± 5% resistors (0603)                                                                               |
| R22           |     1 | 1k Ω ± 1% resistor (0603)                                                                                 |
| R23           |     1 | 3.65k Ω ± 1% resistor (0603)                                                                              |
| R24           |     1 | 22 Ω ± 5% resistor (0603)                                                                                 |
| R25           |     1 | 604 Ω ± 1% resistor (0603)                                                                                |
| R26           |     0 | Not installed, resistor (0603)                                                                            |
| R27           |     1 | 180k Ω ± 5% resistor (0603)                                                                               |
| R28           |     0 | Not installed, resistor (0603)                                                                            |
| R29           |     1 | 1k Ω ± 5% resistor (0603)                                                                                 |
| R30           |     1 | 499 Ω ± 1% resistor (0805)                                                                                |
| R31           |     1 | 4.99k Ω ± 1% resistor (0805)                                                                              |
| R32           |     1 | 10 Ω ± 5% resistor (0805)                                                                                 |
| R33           |     1 | 24.9k Ω ± 1% resistor (0603)                                                                              |
| R34           |     1 | 28k Ω ± 1% resistor (1206)                                                                                |
| R35           |     0 | Not installed, resistor (0805)                                                                            |
| T1            |     1 | 10/100BASE-TX VoIP magnetic module Pulse Engineering H2005A                                               |
| T2            |     1 | 15W, 225µH transformer (12-pin gull wing) Cooper Electronic Technologies CTX01-16741 or Coilcraft B0863-A |
| TP0           |     1 | PC test point (black)                                                                                     |
| TP1, TP2, TP3 |     3 | PC test points (red)                                                                                      |
| U1            |     1 | MAX5941BCSE (16-pin SO)                                                                                   |
| U2            |     1 | 30V, ± 100% to 200% CTR optically isolated error amplifier (8-pin SO) Fairchild Semiconductor FOD2712     |
| U3            |     1 | 2.5V, precision shunt regulator (SOT23-5L) Texas Instruments TL431AIDBVT                                  |
| U4            |     1 | High-isolation voltage photocoupler (SOP-4) CEL/NEC PS2701A-1                                             |
| -             |     2 | Shunts (JU1, JU2)                                                                                         |
| -             |     4 | 0.250in x 0.500in round nylon spacers                                                                     |
| -             |     4 | 4-40 x 0.375in nylon machine screws                                                                       |
| -             |     1 | MAX5941B PC board                                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

## Hardware Connections

- 1) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (class 1-4) and JU2 (class 1).
- 2) Use one of the following methods to power the MAX5941B EV kit:

If network connectivity is required , connect a category 5 Ethernet network cable from the MAX5941B EV kit input port RJ-45 (J1) connector to the corresponding PSE Ethernet LAN connection providing power to the EV kit. Test points TP4-TP9 provide the ethernet data signals.

If network connectivity is not required , connect a 48V DC power supply to the GND and -48V pads on

## Component Suppliers

| SUPPLIER                                 | PHONE        | WEBSITE               |
|------------------------------------------|--------------|-----------------------|
| AVX                                      | 843-946-0238 | www.avxcorp.com       |
| CEL/NEC; California Eastern Laboratories | 800-997-5227 | www.cel.com           |
| Central Semiconductor                    | 631-435-1110 | www.centralsemi.com   |
| Coilcraft                                | 847-639-6400 | www.coilcraft.com     |
| Cooper-Coiltronics                       | 561-752-5000 | www.cooperet.com      |
| Diodes Incorporated                      | 805-446-4800 | www.diodes.com        |
| Fairchild                                | 888-522-5372 | www.fairchildsemi.com |
| International Rectifier                  | 310-322-3331 | www.irf.com           |
| Murata                                   | 770-436-1300 | www.murata.com        |
| Panasonic                                | 714-373-7366 | www.panasonic.com     |
| Pulse Engineering                        | 858-674-8100 | www.pulseeng.com      |
| Sanyo USA                                | 619-661-6835 | www.sanyo.com         |
| TDK                                      | 847-803-6100 | www.component.tdk.com |
| Vishay                                   | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX5941B when contacting these manufacturers.

## Quick Start

The MAX5941B EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Required Equipment:

- An IEEE 802.3af-compliant PSE and a category 5 or 5e Ethernet network cable, or
- One 48V, 1A capable DC power supply
- MAX5941B EV kit
- One voltmeter

the  MAX5941B EV kit. Connect the power supply's most negative terminal to the -48V pad.

- 3) Activate the PSE power supply or turn on the external DC power supply.
- 4) Using a voltmeter, verify that the EV kit provides +3.3V across the VOUT and PGND pads. PGND is galvanically isolated from the EV kit's input GND and GND2 pads.
- 5) Test point TP1 (U1 PGOOD pin), TP2 (U1 PGOOD), TP3 (U1 GATE), and TP0 (-48V) pads are provided throughout the PC board to observe desired signals with an oscilloscope or voltage meter.

## Detailed Description of Hardware

The MAX5941B evaluation kit (EV kit) features a PD interface and DC-DC PWM controller circuit for -48V supply rail  systems. The MAX5941B has an internal isolation switch that limits inrush current during startup. The MAX5941B is used in PDs to receive power from an unshielded, twisted-pair (UTP) Ethernet category 5 or 5e network cable and PSE port, using midspan or endspan Ethernet systems.

The MAX5941B EV kit receives power (12.95W, max) from an IEEE 802.3af-compliant PSE and a UTP cable connected to the EV kit's RJ-45 connector J1. A 10/100BASE-TX VoIP magnetic module (T1) and two

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5941B Evaluation Kit

diode bridge power rectifiers (D4, D5) are used to separate the -48V DC power sent by the PSE. Bridge diode D5 provides the midspan power and bridge diode D4 provides the endspan power. Test points TP4-TP9 are provided for picking off the Ethernet data signals from the  10/100BASE-TX  VoIP  magnetic  module,  T1. Magnetic module T1 is a dual module, however, only a single module is required.

This causes the primary-side bias winding voltage

The EV kit demonstrates the full functionality of the MAX5941B, such as PD detection signature, configurable PD classification signature, programmable inrush current, and programmable UVLO. Resistor R3 sets the PD detection signature. A smaller value resistor  should  be  used to compensate for diode bridges with  higher  resistance.  The  PD  classification  signature is  determined by resistors R4 through R8, and by appropriately configuring jumpers JU1 and/or JU2. A single resistor is only required to determine the actual classification. Gate capacitor C2 sets the inrush current drawn from the PSE by the MAX5941B. PC board pads are provided to install resistors for utilizing the UVLO feature of the MAX5941B. Resistors R1 and R2 set the UVLO threshold voltage and also determine the PD detection signature. When reconfiguring the EV kit for UVLO  operation,  see  the  Programmable  UVLO Configuration section in this document. Also, for proper operation, the UVLO voltage across the GND and -48V pads must be set to a minimum of 12V.

The MAX5941B EV kit's galvanically isolated 13.2W forward DC-DC converter uses the MAX5941B's currentmode PWM controller section of the IC. Power for the DC-DC converter input circuit is provided from the MAX5941B IC VOUT and GND pins (-32V to -60V DC). The forward DC-DC converter is configured for a +3.3V output voltage and provides up to 4A at the output while achieving up to 85% efficiency. Synchronous rectifiers on the secondary side contribute to the high efficiency. Transformer T2 resets winding and diode D13 resets the transformer when MOSFET N1 is turned off. Surfacemount transformer T2 provides up to 1500VRMS of galvanic isolation for the output. Minimal component count is obtained by using a single-transistor (N1) forward DCDC converter topology. Parallel- connected resistors, R14 and R15, are the primary-side current-sense resistors.  When the peak voltage across the current-sense resistors reaches 420mV, the MAX5941B current-limit internal comparator immediately terminates the drive pulse for that switching cycle. This limits the primaryside, pulse-by-pulse current to 1.5A peak. Transformer T2 primary bias winding vs. the secondary-side output winding has a turns ratio of 3. Inductor L2 averages the pulsating voltage across diodes D14 and D8 cathodes.

<!-- image -->

appearing across diode D10 to track the output voltage. With an output voltage of 3.3V, the bias voltage across diode D10 is 9.9V. If the bias voltage across D10 goes too low, the DC-DC converter turns off. Capacitor C17 then charges up through resistor R34. Once the voltage across D10 exceeds 20.6V, the MAX5941B begins switching primary-side MOSFET N1 again. If the MAX5941B EV kit's output is overloaded (&gt; ≈ 4.3A), the MAX5941B stops switching N1. Thus, during an overload condition, the DC-DC converter goes into a hiccup mode of operation and limits the RMS overload current to  the  output.  This  limits  the  power  dissipation  on  both the secondary-side synchronous rectifier MOSFET's N2, N3 and primary-side MOSFET N1.

Isolated voltage feedback is achieved using an optically isolated error amplifier (U2), which includes a built-in shunt regulator and optocoupler. Voltage feedback resistors  R17  and R19 set the output voltage to 3.3V. The MAX5941B OPTO pin receives the voltage feedback signal on the primary side from biasing resistor R31 and compensation resistor/capacitor network R30/C14.

Resistor R32 and capacitor C6 form a snubber network that  suppresses transient-overvoltage ringing at synchronous rectifier N2 and N3, caused by transformer T2 leakage inductance and the capacitance of transistor N2. Transistor N3 functions as a synchronous rectifier for freewheeling diode D16. Both synchronous rectifier  transistors  are  driven  by  a  set  of  secondary-side drive winding on transformer T2. The secondary-side drive winding is designed to have better coupling to the primary-side drive winding than the secondary-side power winding. MOSFET N4 has very low gate charge and very low on-resistance. These features guarantee that MOSFET N3 is turned off as soon as the voltage at diode D17 cathode goes high. MOSFET N2 is turned on by the secondary-side drive winding and turned off by diode D15 when the primary-side MOSFET N1 is turned off.

The MAX5941B DC-DC PWM controller operates at 275kHz and the switching duty cycle is limited to 50% maximum. Refer to the MAX5941B data sheet for more information on the controller's DC-DC PWM features.

The EV kit can also be reconfigured for interfacing to an external DC-DC converter by using the provided -48VOUT and GND2 PC board pads and test points TP0, TP1, TP2. Additionally, the EV kit can also be reconfigured for stand-alone operation with an external DC-DC converter rated for up to 12.95W.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

Caution: The -48VOUT is not isolated from the power coming from the RJ-45 jack, J1.

The MAX5941B EV kit also provides a circuit for powering the EV kit from a wall adapter or local input DC power source. The local DC power source (36V to 44V) is applied to the LOCAL INPUT POWER (+) and LOCAL INPUT POWER (-) PC board pads. Once the local input voltage is above 36V, optical coupler U4 turns off the MAX5941B internal MOSFET by pulling the GATE voltage low. Transistor Q1 turns off transistor Q3, which enables the DC-DC converter to run. Diode D3 prevents the PSE supply from back driving the local source. See the Local Input Power Source section for more information on using a wall adapter or local input DC power source.

## Jumper Selection

The MAX5941B EV kit features several jumpers to reconfigure the EV kit's PD classification and various external DC-DC converter operations.

## PD Classification Signature Selection

The MAX5941B EV kit features two jumpers to set the desired PD classification signature provided to a PSE connected to the EV kit's input port J1 connector. The 3-pin jumper JU1 and 5-pin jumper JU2 are used to configure the classification signature. Table 1 lists the jumper options.

## Table 1. PD Classification Signature Selection

| CLASS   | JU1 SHUNT   | JU2 SHUNT   |
|---------|-------------|-------------|
| Class 0 | 2-3         | Don't Care  |
| Class 1 | 1 and 2     | 1 and 2     |
| Class 2 | 1 and 2     | 1 and 3     |
| Class 3 | 1 and 2     | 1 and 4     |
| Class 4 | 1 and 2     | 1 and 5     |

## External DC-DC Converter or Stand-Alone Operation

The MAX5941B EV kit features PC board pads and test points to interface directly with an external DC-DC converter.  The  GND2 and -48VOUT PC board pads can provide power to the external -48V DC-DC converter. TP1 ( PGOOD )  and  TP2 (PGOOD) are provided for interfacing with the external converter. TP0 is an additional  -48V  test  point  connection.  Gate  capacitor  C2 must be replaced and is dependent on the total input capacitance connected between GND2 and -48VOUT. See the Local Input Power Source section if the MAX5941B EV kit's DC-DC converter is used with an external DC-DC converter and/or a local input power supply connected to the EV kit (especially when installing diode D2).

For stand-alone operation without the EV kit's forward DC-DC converter, several components must be removed. Capacitor C10 must be shorted to disable the EV kit's  on-board converter. Additionally, gate capacitor  C2  must be replaced and is dependent on the external DC-DC converter's total input capacitance, including the EV kit's capacitors C8 and C19.

See the Gate Capacitor Selection section for details on selecting capacitor C2. The maximum power available at the GND2 and -48VOUT pads depends on the classification settings of jumpers JU1 and JU2. To reconfigure the MAX5941B EV kit for either method of operation, see Table 2.

## Table 2. External Converter or StandAlone Operation

| EV KIT OPERATION                      | EV KIT MODIFICATIONS                                                                                                                                                                                                                                                        |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On-Board and External DC-DC Converter | Calculate the new C2 value using C8, C19, and the external DC-DC converter total input capacitance. Use TP1 and TP2 for interfacing with the external DC-DC converter. Use GND2 and -48VOUT pads to power the external converter.                                           |
| Stand Alone                           | Calculate the new C2 value, using the external DC-DC converter total input capacitance with C8 and C19. Place a short across capacitor C10. Use TP0, TP1, and TP2 for interfacing with the external DC-DC converter. Use GND2 and -48VOUT pads to power external converter. |

## Local Input Power Source

The MAX5941B EV kit can be configured for various configurations using a local input power source with the PSE source. The optical coupler U4, transistors Q1 and Q3, resistors R9, R10, R11, diodes D3, D18, D19, and the PC board pads for diode D2 enable these configurations. Use the LOCAL INPUT POWER (+) and LOCAL

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5941B Evaluation Kit

INPUT POWER (-) PC board pads to connect the local input power supply. The local-input power-supply operating voltage range must be within 36V to 44V for the EV kit. This voltage range can be changed with proper selection of diode D19 and resistor R9.

When the local input power source is above 36V, it always takes precedence over the PSE source. In this case, optical coupler U4 turns off the MAX5941B internal MOSFET by pulling the GATE pin voltage low, and the local power is supplied directly to the GND2 and -48VOUT pads. After taking over, the local power source pollutes the discovery and classification signatures of the MAX5941B EV kit, and prevents the PSE from powering up the EV kit until the local power has dropped to zero.

If  the local input power source is below 30V and if the PSE power comes up first, the PSE provides power through the MAX5941B IC VOUT pin. Diode D3 prevents the PSE from back-driving the local input power source when the local input power source is below 30V.

Optionally, when configuring the MAX5941B EV kit for a local input power source, cut open the PC board trace shorting diode D2's PC board pads and install the recommended diode. Diode D2 prevents the local input power source from polluting the discovery and classification signatures of the MAX5941B EV kit. In this configuration, the PSE power source can continuously detect the EV kit and provide power right away after the local power source voltage has dropped below 30V.

## UVLO Configuration, Gate Capacitor Selection, and Ethernet Data Signal Interfacing

## Programmable UVLO Configuration

The MAX5941B EV kit features a programmable UVLO circuit that prevents operation below the programmed input-supply start voltage. Resistors R1 and R2 set the input voltage turn-on and turn-off UVLO of the MAX5941B. To evaluate the UVLO feature, remove resistor R3 and then install surface-mount resistors R1 (1206 case) and R2 (0805 case). Using the desired startup voltage, calculate resistor's R1 and R2 using the following equations:

<!-- formula-not-decoded -->

where VINSTARTUP is the desired startup voltage ( ≥ +12V ) at which the EV kit starts and VREF is 2.460V. Additionally, the total series resistance of R1 and R2 must equate to 25.5k Ω .  Resistors R1 and R2 provide the PD detection signature's resistive component when using the

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

UVLO feature. For proper operation, choose R1 and R2 so the voltage at the MAX5941B UVLO pin does not exceed 7.5V at maximum input voltage.

## Gate Capacitor Selection

The MAX5941B gate capacitor value is dependent upon the total capacitance connected across -48VOUT and GND2. Typically this is the sum of any DC-DC converter  input  capacitance (including C8 and C19) and any other connected bulk capacitance. Gate capacitor C2 is a 0805 surface-mount PC board footprint and is chosen using the following equation:

<!-- formula-not-decoded -->

where ININRUSH is the desired inrush current (set to 100mA for this EV kit) and CIN is the total input capacitance connected across -48VOUT and GND2. When reconfiguring the EV kit for powering an external DCDC converter, see the External DC-DC Converter or Stand-Alone Operation  section for removing certain components.

## Ethernet Data Signal Interfacing

The MAX5941B EV kit features several test points to interface with the Ethernet data signals. Test points TP4, TP5, and TP8 are provided for interfacing with the Ethernet data receive signals. Test points TP6, TP7, and TP9 are provided for interfacing with the Ethernet data transmit signals. All trace lengths to/from module T1 have been matched to within 3 mils in length. The data sheet for module T1, a 10/100BASE-TX VoIP magnetic module, should be consulted prior to interfacing with the EV  kit's  test-point  Ethernet  data  signals.  The 10/100BASE-TX VoIP magnetic module (T1) can be replaced with a module rated for 1000BASE-TX  evaluation  on  Ethernet systems operating at 1000Mbps. The MAX5941B EV kit has not been verified under actual network operating conditions. A dual magnetic module is used for T1, however, only a single module is required.

## MAX5941B Evaluation Kit

Figure 1. MAX5941B EV Kit Schematic-PD and DC-DC Converter Main Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

<!-- image -->

Figure 2. MAX5941B EV Kit Schematic-Local Input Power and Ethernet Connection Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

Figure 3. MAX5941B EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX5941B EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5941B Evaluation Kit

<!-- image -->

Figure 5. MAX5941B EV Kit PC Board Layout-VCC Layer 2

<!-- image -->

Figure 6. MAX5941B EV Kit PC Board Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5941B Evaluation Kit

Figure 7. MAX5941B EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 8. MAX5941B EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 3: 1-4, 8, 12

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600