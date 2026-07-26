<!-- lastmod 2022-08-03 -->
## General Description

The MAX5183 evaluation kit (EV kit) is designed to simplify  evaluation  of  the  8-bit  and  10-bit,  dual,  40MHz, simultaneous-update or alternate-phase-update MAX5180/MAX5183, MAX5182/MAX5185, MAX5186/ MAX5189, and MAX5188/MAX5191 digital-to-analog converters (DACs). The board contains all circuitry necessary for evaluating the dynamic performance of these high-speed converters, including a circuit to convert the DAC's differential outputs into single-ended outputs. Since the design combines high-speed analog and digital circuitry,  the  board  layout  calls  for  special precautions and design features.

Connector pads for power supplies (AVDD, DVDD, VCC, and VEE), DAC outputs (VOUT1, VOUT1A, VOUT2, and VOUT2A), and SMA connectors for the digital and control  inputs  (D0-D9, CS ,  CLK) simplify connection to the EV kit. The four-layer board layout is optimized for best dynamic performance.

The MAX5183 dual, 10-bit, 40MHz, simultaneousupdate DAC is installed on the EV kit board. The kit can be used to evaluate the MAX5180, MAX5182, MAX5185, MAX5186, MAX5188, MAX5189, or MAX5191 with minor component changes.

| DESIGNATION                   |   QTY | DESCRIPTION                                                                                     |
|-------------------------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C2, C11, C12              |     4 | 10µF ± 10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS                |
| C3-C6, C9, C10, C13, C14, C19 |     9 | 0.1µF ± 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104KT                              |
| C7, C8, C15-C18               |     6 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103KT or Taiyo Yuden UMK107B103KZ |
| R1-R12                        |    12 | 49.9 Ω ± 1% resistors (0805)                                                                    |
| R13-R24                       |     0 | Not installed (0805)                                                                            |
| R25-R28, R37                  |     0 | Not installed (0603)                                                                            |
| R29-R36                       |     8 | 402 Ω ± 1% resistors (0603)                                                                     |

<!-- image -->

Features

- ♦ Fast Evaluation and Performance Testing
- ♦ SMA Coaxial Connectors for  Clock and Data Inputs
- ♦ Performance-Optimized Four-Layer PC Board with Separate Analog and Digital Power and Ground Connections
- ♦ On-Board Differential to Single-Ended Conversion Circuitry
- ♦ Fully Assembled and Tested with MAX5183BEEI

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5183EVKIT | 0°C to +70°C | 28 QSOP      |

## Component List

| DESIGNATION                                   |   QTY | DESCRIPTION                                |
|-----------------------------------------------|-------|--------------------------------------------|
| L1                                            |     1 | Ferrite bead (1206) Panasonic EXC-CL3216U1 |
| T1, T2                                        |     2 | Transformers (1:8) Mini-Circuits ADT8-1T   |
| U1                                            |     1 | MAX5183BEEI (28-pin QSOP)                  |
| U2, U3                                        |     2 | MAX4108ESA (8-pin SO)                      |
| D0-D9, CLK, CS , VOUT1, VOUT1A, VOUT2, VOUT2A |    16 | SMA PC mount vertical connectors           |
| JU1-JU12                                      |    12 | 2-pin headers                              |
| JU13-JU19                                     |     7 | 3-pin headers                              |
| None                                          |     8 | Shunts (JU11, JU13-JU19)                   |
| None                                          |     1 | MAX5183 EV kit PC board                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX5183 Evaluation Kit

## Quick Reference

The EV kit is delivered fully assembled, tested, and sealed in an antistatic bag. To ensure proper operation, open the antistatic bag only at a static-safe work area and follow the instructions listed below. Do not turn on the power supplies until all power connections to the EV kit are established. Figure 1 shows a typical evaluation setup for single-ended output operation:

- 1) Connect a -5V power supply to the pad marked VEE .  Connect the supply's ground to the AGND pad. This negative supply for the MAX4108 amplifiers  may  also  be  connected to ground for singlesupply operation.
- 2) Connect a 3V power supply to the pad marked AVDD .  Connect the supply's ground to the pad marked AGND.
- 3) Connect a 5V power supply to the pad marked VCC .  Connect the supply's ground to the pad marked AGND.
- 4) Connect a 3V power supply to the pad marked DVDD .  Connect the supply's ground to the pad marked DGND.
- 5) Verify that a shunt is connected across jumper JU11 (chip select).
- 6) Connect  a  word  or  pattern  generator  (e.g., Tektronix/Sony DG2020A) with the 10-bit digitized pattern of a sinusoidal input signal to the SMA connectors labeled D0-D9.
- 7) Connect an appropriate low-phase-noise clock signal generator (e.g., HP 8662A) to the CLK SMA connector.
- 8) Verify that shunts are connected across pins 2 and 3 of jumpers JU16, JU17, JU18, and JU19.
- 9) Connect an oscilloscope or a spectrum analyzer (e.g., HP 8560E) to the VOUT1A and VOUT2A SMA connectors to analyze the output waveforms.
- 10) Ensure jumpers JU13, JU14, JU15 are configured to the default settings as shown in Tables 1, 2.
- 11) Turn on the supplies and signal sources.

## Detailed Description

## Digital Inputs

The MAX5183 EV kit board includes high-frequency SMA connectors and 2-pin headers JU1-JU12 for the digital data, clock, and control-line inputs (D0-D9, CS , CLK). Each of these matched-impedance signal lines provides on-board series 50 Ω termination resistors located in the signal path of the digital inputs to DGND. Optionally, 50 Ω termination resistors to DGND may be installed by the user.

## DAC Differential Outputs

The MAX5180/MAX5182/MAX5186/MAX5188 currentoutput DACs are designed to supply full-scale output currents of 1mA into 400 Ω loads, in parallel with a capacitive load of 5pF. The MAX5183/MAX5185/ MAX5189/MAX5191 voltage-output DACs have on-chip 400 Ω resistors that restore the array currents to proportional, differential voltages of ±400mV full scale. These differential  output  voltages are then used to drive a transformer or a low-distortion, high-speed operational amplifier (such as the MAX4108 devices and transformers supplied in the EV kit, Figure 2) to convert the differential voltage into a single-ended voltage.

The single-ended outputs may be derived from amplifiers  outputs VOUT1A and VOUT2A or from transformers outputs VOUT1 and VOUT2 (Tables 3, 4).

The MAX5183 EV kit is shipped with the necessary external circuitry to operate the installed MAX5183 voltage-output DAC. The full-scale output current-set resistor (R37) and the 402 Ω conversion resistors (R25-R28) are not required for any of the voltage-output DACs and are therefore not installed on the MAX5183 EV kit.

Figure 1. Typical EV Kit Test Setup for Single-Ended Operation

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DAC Reference Options

The MAX5183 family features an on-chip 1.2V precision bandgap reference, which can be activated by connecting the reference enable pin REN to DGND. For this purpose, jumper JU15 must remain in location 2-3 (Table 1), which is the default location used when the board is shipped.

To disable the internal reference, connect REN to DVDD by placing jumper JU15 in location 1-2. A temperaturestable external reference may now be applied at the REFO pad to set the full-scale current/voltage output.

## Standby Mode

To place the DAC in standby mode (Table 2), connect digital inputs PD and DACEN to DGND by setting jumpers JU13 and JU14 to locations 2-3. In standby, both the reference and the control amplifier are active, with the current array inactive. To exit this condition, pull DACEN high with PD held at DGND by leaving jumper JU14 in location 2-3 and changing jumper JU13 to location 1-2.

## Shutdown Mode

For lowest power consumption, the MAX5183 EV kit provides a shutdown mode (Table 2) in which the reference, control amplifier, and current array are inactive and the converter's supply current is reduced to 1µA. To enter this mode, connect PD to DVDD by changing jumper JU14 to location 1-2. To return to active mode, connect PD to DGND by changing jumper JU14 to location 2-3, and connect DACEN to DVDD by changing jumper JU13 to location 1-2.

## Power Supplies

The EV kit features separate analog (AVDD) and digital (DVDD) power and ground connections for best dynamic  performance. A 2.7V to 3.3V source connected to AVDD and DVDD is required for normal operation. It is not necessary to connect the analog and digital grounds together externally. The two grounds are connected together at a single point on the MAX5183 EV kit (at ferrite bead L1). An additional ±5V source is required when using the differential to single-ended operational amplifier conversion circuitry. Connect the +5V terminal to the VCC pad and the -5V terminal to the VEE pad. Connect the ground terminal to the AGND pad.

## Evaluating the MAX518x Family

The MAX5183 EV kit may be used to evaluate other MAX518x family 8-bit and 10-bit dual DACs. The changes required for this are listed in Table 5.

When evaluating the MAX5186/MAX5189 (dual, 8-bit DACs with simultaneous update) and the MAX5188/ MAX5191 (dual, 8-bit DACs with alternate-phase update), input data bits D0 and D1 must be connected to DGND to ensure proper operation. Install shunts on jumpers JU1 and JU2 to connect D0 and D1 to GND.

<!-- image -->

## MAX5183 Evaluation Kit

## Table 1. Selecting Reference Mode

| REN JUMPER (JU15) POSITION   | REFERENCE MODE                                |
|------------------------------|-----------------------------------------------|
| 1-2                          | Connect external precision reference at REFO. |
| 2-3*                         | Internal 1.2V bandgap reference active        |

* Indicates default jumper state

## Table 2. Selecting Operating Mode

| PD JUMPER (JU14) POSITION   | DACEN JUMPER (JU13) POSITION   | OPERATING MODE   |
|-----------------------------|--------------------------------|------------------|
| 1-2                         | X                              | Shutdown         |
| 2-3                         | 2-3                            | Standby          |
| 2-3*                        | 1-2*                           | Normal operation |

* Indicates default jumper state

## Table 3. Single-Ended Signal for DAC1 Selection

| JU16 POSITION   | JU17 POSITION   | EV KIT FUNCTION                                                                                                                       |
|-----------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 1-2             | 1-2             | DAC1 differential output converted to single-ended signal using transformer configuration available at VOUT1 SMA connector            |
| 2-3             | 2-3             | DAC1 differential output converted to single-ended signal using operational amplifier configuration available at VOUT1A SMA connector |

## Table 4. Single-Ended Signal for DAC2 Selection

| JU18 POSITION   | JU19 POSITION   | EV KIT FUNCTION                                                                                                                       |
|-----------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 1-2             | 1-2             | DAC2 differential output converted to single-ended signal using transformer configuration available at VOUT2 SMA connector            |
| 2-3             | 2-3             | DAC2 differential output converted to single-ended signal using operational amplifier configuration available at VOUT2A SMA connector |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5183 Evaluation Kit

## Board Layout

The EV kit is a 4-layer board design (Table 6), optimized for high-speed signals. The EV kit board uses FR4 epoxy dielectric material with a relative dielectric constant of ε r = 4.2 to 4.9. A proper FR4 design requires 14mils foil thickness for each 1oz copper layer and 0.1mm dielectric thickness between the layers. All high-speed signals are routed through 50 Ω impedance-matched transmission lines. The line width for these signal lines is 14mils, with a ground plane height of 8mils.

The board layout separates the analog and digital portions of the circuit. Matched 50 Ω impedance transmission lines are used for all high-speed digital inputs. The digital inputs are arranged in a half circle to match the line  lengths  between DAC inputs and the pattern and clock generators' SMA connectors. The lengths of these 50 Ω transmission lines are matched to within 50mils to minimize layout-dependent data skew.

Wherever large ground planes are used, care is taken to  ensure that the analog planes do not overlap with any digital planes. This eliminates the possibility of capacitively coupling digital noise through the circuit board to sensitive analog areas.

Table 5. Evaluating All Dual, 8-Bit/10-Bit DACs in the MAX518x Family

| DEVICE INSTALLED ON THE EV KIT   | R25-R28, R37   |
|----------------------------------|----------------|
| MAX5180                          | Installed      |
| MAX5182                          | Installed      |
| MAX5183*                         | Not installed  |
| MAX5185                          | Not installed  |
| MAX5186                          | Installed      |
| MAX5188                          | Installed      |
| MAX5189                          | Not installed  |
| MAX5191                          | Not installed  |

* As shipped

Table 6. EV Kit PC Board Layers

| LAYER                                     | DESCRIPTION                                                                                                 |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Layer I, top                              | Components, jumpers, SMA connec- tors, digital 50 Ω microstrip lines, 50 Ω termination resistors, DVDD, VCC |
| Layer II, analog and digital ground plane | Analog (AGND) and digital (DGND) ground                                                                     |
| Layer III, analog and digital power plane | Analog (AVDD) and digital (DVDD) power                                                                      |
| Layer IV, bottom                          | Components, 50 Ω termination resis- tors, AVDD, VEE                                                         |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Panasonic   | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Please indicate that you are using the MAX5183 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX5183 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX5183 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX5183 EV Kit PC Board Layout-Component Side (Layer I)

Figure 4. MAX5183 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 6. MAX5183 EV Kit PC Board Layout-Ground Planes (Layer II)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX5183 EV Kit PC Board Layout-Power Planes (Layer III)

<!-- image -->

## MAX5183 Evaluation Kit

Figure 8. MAX5183 EV Kit PC Board Layout-Solder Side (Layer IV)

<!-- image -->

7