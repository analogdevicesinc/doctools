<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5940B evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board featuring an Ethernet port, network powered device (PD) interface controller circuit for -48V supply systems. The EV kit uses the MAX5940B IEEE 802.3af-compliant network PD interface controller in an 8-pin SO package. The MAX5940B EV kit can also evaluate the MAX5940D rated for an absolute maximum input voltage of 90V. The MAX5940B features an internal isolation switch that limits  inrush  current.  The  MAX5940B is used in powerover-LAN applications requiring DC power from an Ethernet network port for PDs such as IP phones, wireless access nodes, and security cameras.

The MAX5940B EV kit receives power from an IEEE 802.3af-compliant power sourcing equipment (PSE). See the MAX5922 and MAX5935* data sheets for PSE controllers. The PSE provides the required -44V to -57V DC power over an unshielded twisted-pair Ethernet network cable to the EV kit's RJ-45 jack. The EV kit features a 10/100BASE-TX Voice-over-IP (VoIP) magnetic module and two diode bridges for separating the DC power provided by an endspan or midspan Ethernet system.

The EV kit demonstrates the full functionality of the MAX5940B such as the PD detection signature, configurable PD classification signature, programmable inrush current, and undervoltage lockout (UVLO). All of these features are configurable on the EV kit and additional  test  points  for  voltage  probing  and  interfacing have been provided for the PD interface.

The MAX5940B EV kit also features a galvanically isolated 6W, 275kHz switching frequency flyback DC-DC converter, which uses the MAX5014 current-mode PWM controller. The MAX5940B's -48V output provides power for the converter circuit. The DC-DC converter is configured for an output voltage of 4.25V and provides up to 1.4A at the output. High efficiency up to 82.2% is achieved using a single transistor flyback DC-DC converter topology. The surface-mount transformer provides 1500V galvanic isolation for the output. UVLO, soft-start, and thermal shutdown provide a robust 6W isolated power supply.

The EV kit can be reconfigured for interfacing to an external DC-DC converter for an additional 7W of output power.

* Future product-Contact factory for availability.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Warning: The MAX5940B EV kit operates with high voltages. Dangerous voltages are present on this EV kit and on equipment connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow safety procedures appropriate to working with high-voltage electrical equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or of component debris at high velocity. Operate this EV kit with care to avoid possible personal injury.

## Features

- ♦ IEEE 802.3af-Compliant PD Interface Circuit
- ♦ PD Detection and Configurable Classification Signatures
- ♦ Programmable Inrush Current Limit
- ♦ Programmable UVLO
- ♦ Isolated 6W Flyback DC-DC Converter
- ♦ -36V to -60V Input Range
- ♦ Isolated 4.25V Output at 1.4A
- ♦ Evaluates Endspan and Midspan Ethernet Systems
- ♦ Interface to an External DC-DC Converter
- ♦ Local Power Inputs (Wall Cube)
- ♦ Also Evaluates MAX5940D (IC Replacement Required)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC-PACKAGE   |
|---------------|--------------|--------------|
| MAX5940BEVKIT | 0°C to +70°C | 8 SO         |

1

## MAX5940B Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1            |     1 | 0.068µF ±10%, 100V X7R ceramic capacitor (1210) Murata GRM32NR72A683K         |
| C2            |     1 | 6800pF ±10%, 100V X7R ceramic capacitor (0805) Murata GRM219R72A682K          |
| C3            |     1 | 47µF ±20%, 100V electrolytic capacitor (12.5mm x 13.5mm) Sanyo 100CV47FS      |
| C4            |     1 | 1000pF ±10%, 250VAC X7R UL ceramic capacitor (2010) Murata GA352QR7GF102KW01L |
| C5, C6        |     2 | 330µF ±10%, 10V tantalum capacitors (X) Kemet T494X337K010AS                  |
| C7, C15       |     2 | 1.0µF ±10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H105K              |
| C8, C16       |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K           |
| C9            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata 188R61A105K                 |
| C10           |     1 | 0.033µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM219R71H333K          |
| C11           |     1 | 4700pF 250VAC X7R ceramic capacitor (2220) Murata GA355DR7GC472KY02           |
| C12           |     1 | 22µF ±20%, 35V tantalum capacitor (D) Kemet T494D226M035AS                    |
| C13           |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H104K            |
| C14           |     1 | 0.22µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A224K           |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                         |
|---------------|-------|-----------------------------------------------------------------------------------------------------|
| C17           |     1 | 10µF ±10%, 25V tantalum capacitor (C) Vishay 293D106X9025C2                                         |
| C18           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K                                 |
| C19, C20      |     2 | 0.01µF ±10%, 100V X7R ceramic capacitors (0805) Murata GRM21BR72A103K                               |
| C21           |     1 | 0.68µF ±20%, 100V X7R ceramic capacitor (1210) TDK C3225X7R2A684M                                   |
| D1            |     1 | 56.7V 600W zener overvoltage transient suppressor (SMB) Vishay SMBJ51A                              |
| D2            |     1 | 3A 40V Schottky diode (SMC) Diodes Incorporated B340                                                |
| D3, D4        |     2 | 1A 200V super-fast rectifiers (SMB) Diodes Incorporated MURS120                                     |
| D5            |     1 | 51V 5% 3W zener diode (SMB) Vishay BZG05C51                                                         |
| D6            |     1 | 300mA 75V high-speed diode (SOD-123) Diodes Incorporated 1N4148W                                    |
| D7, D8        |     2 | 1A 200V standard recovery power rectifiers (DFS case) Vishay DF02SA                                 |
| D9            |     1 | 1A 100V standard recovery power rectifier (SMA) Diodes Incorporated S1B                             |
| D10           |     0 | Not installed, 1A 100V standard recovery power rectifier (SMA) Diodes Incorporated, S1B recommended |
| D11           |     1 | 30V 500mW zener diode (SOD123) Diodes Incorporated BZT52C30                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5940B Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| J1            |     1 | RJ-45 black through-hole connector, 8P-8C                          |
| JU1           |     1 | 3-pin header                                                       |
| JU2           |     1 | 5-pin header                                                       |
| N1            |     1 | 150V, 4.3A n-channel MOSFET (D-PAK) Fairchild FQD5N15TM            |
| Q1, Q2        |     2 | 60V, 200mA NPN transistors (SOT-23) Central Semiconductor CMPT3904 |
| R1            |     0 | Not installed, resistor (1206)                                     |
| R2            |     0 | Not installed, resistor (0805)                                     |
| R3            |     1 | 25.5k Ω ±1% resistor (1206)                                        |
| R4            |     1 | 10k Ω ±1% 100ppm thick-film resistor (0805) Panasonic ERJ6ENF1002V |
| R5            |     1 | 732 Ω ±1% 100ppm thick-film resistor (1206) Panasonic ERJ8ENF7320V |
| R6            |     1 | 392 Ω ±1% 100ppm thick-film resistor (1206) Panasonic ERJ8ENF3920V |
| R7            |     1 | 255 Ω ±1% 100ppm thick-film resistor (1206) Panasonic ERJ8ENF2550V |
| R8            |     1 | 178 Ω ±1% 100ppm thick-film resistor (1812) Panasonic ERJ12NF1780U |
| R9            |     1 | 470 Ω ±5% resistor (0805)                                          |
| R10           |     1 | 10k Ω ±1% resistor (0805)                                          |
| R11           |     1 | 2.1k Ω ±1% resistor (0805)                                         |
| R12           |     1 | 221 Ω ±1% resistor (0805)                                          |
| R13           |     1 | 100 Ω ±5% resistor (0805)                                          |
| R14           |     1 | 0.68 Ω ±1% resistor (1206) Panasonic ERJ8RQFR68V                   |

## Quick Start

The MAX5940B EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R15           |     1 | 10 Ω ±5% resistor (0805)                                                   |
| R16           |     1 | 1M Ω ±5% resistor (0805)                                                   |
| R17           |     1 | 24.3k Ω ±1% resistor (0805)                                                |
| R18, R19      |     2 | 75 Ω ±5% resistors (0805)                                                  |
| R20           |     1 | Not installed, resistor (0805)                                             |
| R21           |     1 | 2k Ω ±1% resistor (0805)                                                   |
| R22           |     1 | 100k Ω ±1% resistor (0805)                                                 |
| R23           |     1 | 0 Ω ±5% resistor (0805)                                                    |
| R24           |     1 | 150 Ω ±5% resistor (1210)                                                  |
| T1            |     1 | 10/100BASE-TX voice-over-IP magnetic module Pulse Engineering H2005A       |
| T2            |     1 | 6W 200µH transformer (12-pin Gull Wing) Cooper-Coiltronics CTX03-16649     |
| TP1, TP2, TP3 |     3 | PC test points, red                                                        |
| TP0           |     1 | PC test point, black                                                       |
| U1            |     1 | MAX5940BESA (8-pin SO)                                                     |
| U2            |     1 | Current-mode PWM controller (8-pin SO) Maxim MAX5014CSA                    |
| U3            |     1 | High-isolation voltage photocoupler (SOP-4) CEL/NEC PS2703-1               |
| U4            |     1 | 1.24V precision shunt regulator (SOT-23-5L) Texas Instruments TLV431AIDBVR |
| U5            |     1 | High-isolation voltage photocoupler (SOD-4) CEL/NEC PS2701A-1              |
| None          |     2 | Shunts (JU1, JU2)                                                          |
| None          |     4 | Rubber bumpers                                                             |
| None          |     1 | MAX5940B PC board                                                          |

## Required Equipment:

An IEEE 802.3af-compliant PSE and a Category 5 or 5e Ethernet network cable or:

- One 48V, 1A-capable DC power supply
- MAX5940B EV kit
- One voltmeter

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5940B Evaluation Kit

## Component Suppliers

| SUPPLIER                                 | PHONE        | FAX          | WEBSITE               |
|------------------------------------------|--------------|--------------|-----------------------|
| CEL/NEC; California Eastern Laboratories | 800-997-5227 | 408-588-2213 | www.cel.com           |
| Cooper-Coiltronics                       | 561-752-5000 | 561-742-1178 | www.cooperet.com      |
| Diodes Incorporated                      | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild                                | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                                      | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Kemet                                    | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Murata                                   | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic                                | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Pulse Engineering                        | 858-674-8100 | 858-674-8262 | www.pulseeng.com      |
| Sanyo Electronic Device                  | 619-661-6835 | 619-661-1055 | www.sanyodevices.com  |
| TDK                                      | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay                                   | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5940B when contacting these component suppliers.

## Hardware Connections

- 1) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (Class 1-4) and JU2 (Class 1).
- 2) Use one of the following methods to power the MAX5940B EV kit:

If  network connectivity is required: connect a Category 5 Ethernet network cable from the MAX5940B EV kit input port RJ-45 (J1) connector to the corresponding PSE Ethernet LAN connection, which provides power to the EV kit. Test points TP4-TP9 provide the ethernet data signals.

If  network connectivity is not required: connect a 48V DC power supply to the GND and -48V pads on the MAX5940B EV kit.

- 3) Activate the PSE power supply or turn on the external DC power supply.
- 4) Using a voltmeter, verify that the EV kit provides +4.25V across the VOUT and PGND pads. PGND is galvanically isolated from the EV kit's input GND and output GND2 pads.
- 5) Observe desired signals with an oscilloscope or voltage meter on test point TP1 (U1 PGOOD pin), TP2 (U1 PGOOD), TP3 (U1 GATE), and TP0 (-48V) pads provided on the PC board.

## Detailed Description of Hardware

The MAX5940B EV kit features an Ethernet-port network PD interface controller circuit for -48V supply rail systems. The MAX5940B IEEE 802.3af-compliant network PD interface controller in an 8-pin SO package. The MAX5940B has an internal isolation switch that also limits  inrush  current  from  the  PSE.  The  MAX5940B is used in power-over-LAN applications for powering PDs from an unshielded twisted-pair (UTP) Ethernet Category 5 or 5e network cable and PSE port using endspan or midspan Ethernet systems.

The MAX5940B EV kit receives power (12.95W, max) from an IEEE 802.3af-compliant PSE and a UTP cable connected to the EV kit's RJ-45 connector J1. It uses a 10/100BASE-TX VoIP magnetic module (T1) and two diode-bridge power rectifiers (D7, D8) to separate the -48V DC power sent by the PSE. The MAX5940B EV kit can accept power from an endspan or midspan PSE network configuration. Diode D8 provides the midspan power and diode D7 provides the endspan power. Test points TP4-TP9 pick off the Ethernet data signals from the IP magnetic module T1. Magnetic module T1 is a dual module; however, only a single module is required.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5940B Evaluation Kit

The EV kit demonstrates the full functionality of the MAX5940B such as PD detection signature, configurable PD classification signature, programmable inrush current, and programmable UVLO. Resistor R3 sets the PD detection signature. A smaller value resistor should be used to compensate for diode bridges with higher resistance. Resistors R4-R8 determine the PD classification signature and appropriately configured jumpers JU1 and JU2. A single resistor is required to determine the classification. Gate capacitor C2 sets the inrush current. To utilize the UVLO feature of the MAX5940B, PC board pads are provided to install resistors R1 and R2. Resistors R1 and R2 set the UVLO threshold voltage and also determine the PD detection signature. For reconfiguring the EV kit for UVLO operation, see the UVLO Configuration section. Also, for proper operation, set the UVLO voltage to a minimum of 12V.

Test points TP0 (-48V), TP1 ( PGOOD ),  TP2  (PGOOD), and TP3 (GATE) provide for voltage probing and/or interfacing with an external DC-DC converter.

The MAX5940B EV kit's galvanically isolated, 6W flyback DC-DC converter uses a MAX5014 current-mode PWM controller. The MAX5940B's VOUT and GND2 pins (-32V to  -60V DC) provide power for the DC-DC converter input circuit. The flyback DC-DC converter is configured for an output voltage of +4.25V and provides up to 1.4A at  the  output while achieving up to 82.2% efficiency. Minimal component count is obtained by using a singletransistor (N1) flyback DC-DC converter topology. The surface-mount transformer T2 provides 1500V galvanic isolation for the output. Current-sense resistor R14 limits the peak current through transistor N1 and primary of transformer T2 to 1.5A. Isolated feedback voltage is achieved by using optical coupler U3 and shunt regulator U4. Voltage feedback resistors R10 and R17 set the output voltage. Diodes D4 and D5 limit the voltage at the primary windings of T2 during switching. Resistor R15 and capacitor C18 form a snubber network that suppresses transient overvoltage ringing at diode D2 caused by transformer T2 leakage inductance and the junction capacitance of diode D2.

Soft-start capacitor C14 enables the voltage at VOUT to ramp up in a controlled manner without any voltage overshoot. Internal UVLO and thermal shutdown within the MAX5014 provide for a robust 6W isolated powersupply design. The MAX5014 PWM controller operates at  275kHz and the duty cycle is limited to 85% maximum. Refer to the MAX5014 data sheet for more information on this controller.

<!-- image -->

The EV kit can easily be reconfigured to interface with an external DC-DC converter for an additional 7W of output power using the provided -48VOUT and GND2 PC board pads and test points TP0, TP1, and TP2. Additionally, the EV kit can also be reconfigured for stand-alone operation with an external DC-DC converter rated for up to 12.95W.

The MAX5940B EV kit also provides a circuit for powering the EV kit from a wall adapter or 'local input' DC power source. Apply the local DC power source (36V to 44V) to the local input power (+) and local input power (-) PC board pads. Once the local input voltage is above 36V, optical coupler U4 turns off the MAX5940B internal MOSFET by pulling the GATE voltage low. Transistor Q1 turns off transistor Q3, which enables the DC-DC converter to run. Diode D3 prevents the PSE supply from back-driving the local power source. See the Local Input Power Source section for more information on using a wall adapter or 'local input' DC power source.

Caution: The -48VOUT is not isolated from the power coming from the RJ-45 jack J1.

## Jumper Selection

The MAX5940B EV kit features several jumpers to reconfigure the EV kit's PD classification and external DC-DC converter operation.

## PD Classification Signature Selection

The MAX5940B EV kit has two jumpers that set the desired PD classification signature to a PSE connected to the EV kit's input port J1 connector. The 3-pin jumper JU1 and 5-pin jumper JU2 configure the classification signature. Table 1 lists the jumper options.

Table 1. PD Classification Signature Selection

| CLASS   | JU1 SHUNT   | JU2 SHUNT   |
|---------|-------------|-------------|
| Class 0 | 2-3         | Don't care  |
| Class 1 | 1, 2        | 1, 2        |
| Class 2 | 1, 2        | 1, 3        |
| Class 3 | 1, 2        | 1, 4        |
| Class 4 | 1, 2        | 1, 5        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5940B Evaluation Kit

## External DC-DC Converter or Stand-Alone Operation

The MAX5940B EV kit features PC board pads and test points to interface directly with an external DC-DC converter. The GND2 and -48VOUT PC board pads provide power to the external -48V DC-DC converter. TP1 ( PGOOD ) and TP2 (PGOOD) provide interfacing with the external converter. TP0 is an additional -48V test point connection. Gate capacitor C2 must be replaced and depends on the total input capacitance of both DC-DC converters (EV kit and external).

For stand-alone operation without the EV kit's 6W flyback DC-DC converter, remove several components. Short the PC board pads across capacitor C14 to disable the EV kit's on-board 6W flyback DC-DC converter. Also remove bulk capacitor C3. Additionally, replace gate capacitor C2, which depends upon the external DC-DC converter input capacitance. See the Gate Capacitor Selection section for selecting capacitor C2. The maximum power available at the GND2 and -48VOUT pads depends on the classification settings of jumpers JU1 and JU2. To reconfigure the MAX5940B EV kit for either method of operation, see Table 2.

## Local Input Power Source

Opticoupler U5; transistors Q1 and Q2; and resistors R21, R22, and R23 along with diodes D9, D11, and the PC board pads for diode D10 enable the MAX5940B EV kit  to  be  configured for various configurations using a local input power source with the PSE source. Use the Local Input Power (+) and Local Input Power (-) PC board pads to connect the local input power supply. The local input power-supply operating voltage range must be within 36V to 44V for the EV kit. This voltage range can be changed with proper selection of diode D11 and resistor R21.

When the local input power source is above 36V, it will always take precedence over the PSE source. In this case, U5 turns off the MAX5940B internal MOSFET by pulling the GATE voltage low and the local power is supplied directly to the GND2 and -48VOUT pads. Once taking over, the local power source pollutes the discovery  and  classification  signatures  of  the MAX5940B EV kit and prevents the PSE from powering up the EV kit until the local power has dropped to 0V.

If  the local input power source is below 32V and if the PSE power comes up first, the PSE will provide power through the MAX5940B IC VOUT pin. Diode D9 will prevent the PSE from back-driving the local input power source when it is below 32V.

As an option when configuring the MAX5940B EV kit for a local input power source, cut open the PC board trace, shorting the diode D10 PC board pads, and install the recommended diode. D10 prevents the local input power source from polluting the discovery and classification signatures of the MAX5940B EV kit. In this configuration, the PSE power source can continuously detect the EV kit and provide power right away after the local power source voltage has dropped below 32V.

## UVLO Configuration, Gate Capacitor Selection, and Ethernet Data-Signal Interfacing

## Programmable UVLO Configuration

The MAX5940B EV kit features a UVLO circuit that prevents operation below the programmed input-supply start voltage. Resistors R1 and R2 set the input voltage

## Table 2. External Converter or Stand-Alone Operation

| EV KIT OPERATION                       | REMOVE                    | EV KIT MODIFICATIONS                                                                                                                                                                                                                                     |
|----------------------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On-Board and External DC-DC Converters | None                      | • Calculate new C2 value, using C3 and external DC-DC converter total input capacitance. • Use TP0, TP1, TP2 to interface with an external DC-DC converter. • Use GND2 and -48VOUT pads to power an external converter.                                  |
| Stand-Alone                            | Resistor R20 Capacitor C3 | • Calculate new C2 value, using an external DC-DC converter total input capacitance. • Short capacitor C14 PC board pads. • Use TP0, TP1, TP2 to interface with an external DC-DC converter. • Use GND2 and -48VOUT pads to power an external converter. |

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX5940B Evaluation Kit

turn-on and UVLO of the MAX5940B. To evaluate the programmable UVLO feature, remove resistor R3 and then install surface-mount resistors R1 (1206 case) and R2 (0805 case). Using the desired startup voltage, calculate resistors R1 and R2 using the following equations:

<!-- formula-not-decoded -->

where VINSTARTUP is the desired startup voltage ( ≥ +12V) at which the EV kit starts and VREF is typically 2.47V. Additionally, the total series resistance of R1 and R2 must equate to 25.5k Ω . Resistors R1 and R2 provide the PD detection signature's resistive component when using the UVLO feature. For proper operation, the R1/R2 divider voltage of the UVLO pin of the MAX5940B must not exceed 7.5V at the maximum input voltage.

## Gate Capacitor Selection

The MAX5940B gate capacitor value depends upon the total capacitance connected to the MAX5940B IC -48VOUT and GND2 pins. Typically, this is the sum of any DC-DC converter input capacitance (including C3 and C21, if used) and any connected bulk capacitance. Gate capacitor C2 is a 0805 surface-mount PC board footprint and is chosen using the following equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Where IINRUSH is the desired inrush current (set to 100mA for this EV kit) and CIN is the total input capacitance connected to the MAX5940B -48VOUT and GND2 pins (only C3 as configured). When reconfiguring the EV kit  for  powering an external DC-DC converter, see the External DC-DC Converter or Stand-Alone Operation section for removing certain components.

## Ethernet Data Signal Interfacing

The EV kit features several test points to interface with the Ethernet data signals. Test points TP4, TP5, and TP8 provide for interfacing with the Ethernet data receive signals. Test points TP6, TP7, and TP9 provide interfacing with the Ethernet data transmit signals. All trace lengths to/from module T1 have been matched to within 3mils in length. The data sheet for module T1, a 10/100BASE-TX VoIP magnetic module, should be consulted prior to interfacing with the EV kit's test point Ethernet data signals. The 10/100BASE-TX VoIP magnetic module (T1) can be replaced with a module rated for 1000BASE-TX for evaluation on Ethernet systems operating at 1000Mbps. The MAX5940B EV kit has not been verified under actual network operating conditions. A dual magnetic module is used for T1; however, only a single module is required.

## MAX5940B Evaluation Kit

Figure 1. MAX5940B EV Kit Schematic (PD Main Circuit)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5940B Evaluation Kit

<!-- image -->

Figure 2. MAX5940B EV Kit Schematic (6W 4.25V Isolated Power-Supply Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX5940B/MAX5940D

## MAX5940B Evaluation Kit

<!-- image -->

Figure 3. MAX5940B EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX5940B EV Kit PC Board Layout-VCC Layer 2

<!-- image -->

Figure 7. MAX5940B EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 4. MAX5940B EV Kit PC Board Layout-Component Side

Figure 6. MAX5940B EV Kit PC Board Layout-GND Layer 3

<!-- image -->

Figure 8. MAX5940B EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600