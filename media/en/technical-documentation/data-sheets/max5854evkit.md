<!-- lastmod 2022-08-05 -->
## General Description

The MAX5854 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX5854 digital-to-analog converter (DAC). The MAX5854 is a dual, 10-bit parallel, 165Msps DAC that integrates a 1.24V voltage reference and provides a differential current output. The EV kit operates with CMOScompatible data inputs, a differential or single-ended clock input, and 3V power supplies for simple board operation.

The MAX5854 EV kit can also be used to evaluate the MAX5853 (80Msps) DAC.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1-C6         |     6 | 0.1µF ± 10%, 6.3V X5R ceramic capacitors (0201) TDK C0603X5R0J104K or Murata GRM033R60J104K    |
| C7-C13        |     7 | 0.1µF ± 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K or Taiyo Yuden LMK105BJ104KV |
| C14, C15      |     2 | 5pF ± 0.25pF, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H050C                             |
| C16-C21       |     6 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                                |
| C22-C27       |     6 | 10µF ± 10%, 10V tantalum capacitors (A) AVX TAJA106K010R or Kemet T494A106K010AS               |
| L1, L2, L3    |     3 | Ferrite bead inductors, 115 Ω at 100MHz (1812) Panasonic EXC-CL4532U1                          |
| R1-R7, R16    |     8 | 49.9 Ω ± 1% resistors (0603)                                                                   |
| R8, R12       |     0 | Not installed, resistor (0603)                                                                 |
| R9            |     1 | 1.91k Ω ± 1% resistor (0603)                                                                   |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                                                         |
|---------------------------------|-------|-----------------------------------------------------------------------------------------------------|
| R10                             |     1 | 10k Ω ± 5% resistor (0603)                                                                          |
| R11, R13, R14, R15              |     4 | 1k Ω ± 5% resistors (0603)                                                                          |
| R17, R18                        |     2 | 100 Ω ± 1% resistors (0603)                                                                         |
| T1                              |     1 | Transformer (1:1) Mini-Circuits ADTL1-12                                                            |
| T2, T3, T4                      |     3 | Transformers (1:1) Coilcraft TTWB3010-1                                                             |
| U1                              |     1 | MAX5854ETL (40-pin thin QFN-EP, 6mm x 6mm)                                                          |
| U2                              |     1 | Quadruple bus buffer gate with tri-state outputs (14-pin TSSOP-PW) Texas Instruments SN74ALVC125PWR |
| CLKD, CLKIN, CLKOUT, OUTA, OUTB |     5 | SMA PC-mount vertical connectors                                                                    |
| J1                              |     1 | 2 x 21 pin surface-mount header Samtec TSM-121-02-S-MT                                              |
| JU1-JU9                         |     9 | 2-pin headers                                                                                       |
| None                            |     9 | Shunts (JU1-JU9)                                                                                    |
| None                            |     1 | MAX5854 PC board                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

- ♦ Fast Evaluation and Performance Testing
- ♦ CMOS Compatible
- ♦ SMA Coaxial Connectors for Clock Inputs, Clock Output, and Analog Output
- ♦ 50 Ω Matched Clock Input and Analog Output Signal Lines
- ♦ Single-Ended to Differential Clock SignalConversion Circuitry
- ♦ Differential Current Output to Single-Ended Voltage Signal Output Conversion Circuitry
- ♦ Full-Scale Current Output Configured for 20mA
- ♦ Fully Assembled and Tested
- ♦ Also Evaluates the 80Msps MAX5853

## Ordering Information

EP = Exposed pad.

| PART         | TEMP RANGE       | IC PACKAGE     |
|--------------|------------------|----------------|
| MAX5854EVKIT | 0 ° C to +70 ° C | 40 Thin QFN-EP |

## MAX5854 Evaluation Kit

Recommended equipment:

- Three 3VDC power supplies
- Two signal generators with low-phase noise and low jitter for clock input (e.g., HP 8662A)
- One dual 10-bit digital pattern generator for data inputs (e.g., Tektronix DG2020A)
- One spectrum analyzer (e.g., HP 8560E)
- One voltmeter

The MAX5854 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on power supplies or enable signal generators/pattern until all connections are completed:

- 1) Verify  that  shunts  are  not  installed  across  jumpers JU1, JU2, and JU3.
- 2) Verify that shunts are installed across jumpers JU4, JU5, JU6, JU7, JU8, and JU9.
- 3) Synchronize  the  digital  pattern  generator (DG2020A) with the clock signal generator (HP 8662A).
- 4) Connect the clock signal generator to the CLKD SMA connector on the EV kit.
- 5) Verify that the digital pattern generator is programmed for valid CMOS output voltage levels.
- 6) Connect the digital signal generator output to the J1 input header connector on the EV kit board. The input header pins are labeled for proper connection to the digital pattern generator.
- 7) Connect the spectrum analyzer to channel A OUTA output SMA connector or to channel B output OUTB SMA connector.

## Component Suppliers

| SUPPLIER      | PHONE         | FAX          | WEBSITE               |
|---------------|---------------|--------------|-----------------------|
| AVX           | 843-946-0238  | 843-626-3123 | www.avxcorp.com       |
| Coilcraft     | 847-639-6400  | 847-639-1469 | www.coilcraft.com     |
| Kemet         | 864-963-6300  | 864-963-6322 | www.kemet.com         |
| Mini-Circuits | 718-934-4500  | 718-934-7092 | www.minicircuits.com  |
| Murata        | 770-436-1300  | 770-436-3030 | www.murata.com        |
| Panasonic     | 714-373-7366  | 714-737-7323 | www.panasonic.com     |
| Samtec        | 800-726-8329  | 812-948-5047 | www.samtec.com        |
| Taiyo Yuden   | 800-348-2496  | 847-925-0899 | www.t-yuden.com       |
| TDK           | 847- 803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX5854 when contacting these component suppliers.

## Quick Start

- 8) Connect a 3V, 100mA power supply to AVDDIN. Connect the ground terminal of this supply to AGND.
- 9) Connect a 3V, 100mA power supply to DVDDIN. Connect the ground terminal of this supply to DGND.
- 10) Connect a 3V, 100mA power supply to CVDDIN. Connect the ground terminal of this supply to CGND.
- 11) Turn on all three power supplies.
- 12) Enable the clock signal generator (HP 8662A) and the digital pattern generator.
- 13) Set the clock signal generator output power to 10dBm and the frequency (fCLK) to less than or equal to 165MHz.
- 14) Use the spectrum analyzer to view the MAX5854 output spectrum or view the output waveform using an oscilloscope on the OUTA or OUTB outputs.

Figure 1. MAX5854 EV Kit Quick-Start Setup

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX5854 EV kit is designed to simplify the evaluation of the MAX5854 dual 10-bit, 165Msps, current output DAC. The MAX5854 operates with CMOS-compatible data inputs, a differential or single-ended clock input signal, an internal 1.24V reference voltage, and a 3V power supply.

The MAX5854 EV kit provides header connector J1 to easily  interface  with  a  pattern  generator,  circuitry  that converts the differential current outputs to single-ended voltage signals, and circuitry to convert a user-supplied single-ended clock signal to a differential clock signal. The EV kit can operate from a single 3V power supply but also supports the use of three separate 3V power supplies. Dividing the circuit into digital, analog, and clock planes improves dynamic performance.

## Power Supplies

The MAX5854 EV kit can operate from a single 3V power supply connected to the DVDDIN, AVDDIN, CVDDIN input power pads, and their respective ground pads for simple board operation. However, three separate 3V power supplies are recommended for optimum dynamic performance. The EV kit board layout is divided into three sections: digital, analog, and clock. Using separate power supplies for each section reduces crosstalk noise and improves the integrity of the output signal. When using separate power supplies, connect a power supply across the DVDDIN and DGND PC board pads (digital), across the CVDDIN and CGND PC board pads (clock), and across the AVDDIN and AGND PC board pads (analog) on the EV kit.

## CMOS Digital Input Data

The MAX5854 EV kit provides one 0.1in 2 x 21 header (J1) to interface a dual 10-bit CMOS pattern generator to the EV kit. The header data pins are labeled on the PC board with their appropriate data bit designation for channel A and channel B. Use the labels on the EV kit to match the data bits from the pattern generator to the corresponding data pins on header J1. The input data is latched on the rising edge of the clock signal.

## DAC Programming

The MAX5854 can be programmed to operate in different modes by writing a control word through the channel A data port. Gain matching, interleaved data mode, internal  or  external  reference,  idle  mode,  and  powerdown are functions that are programmable. On powerup, the MAX5854 is automatically configured with the internal  reference  enabled, the interleaved data mode disabled, DAC enabled and fully operational, and a gain of 0dB for channel A. Refer to the MAX5854 data sheet, Programming the DAC section for additional programming details.

<!-- image -->

## Clock Signal

The MAX5854 operates with a single-ended CMOS or a differential clock input signal. However, the EV kit board only requires one external single-ended clock signal to evaluate the two clock modes. The EV kit circuit  provides  connectors that connect a single-ended signal directly to the DAC and circuitry that converts a single-ended clock signal to a differential clock signal.

For single-ended clock mode, remove the shunt from jumper JU9, install shunts on jumpers JU1, JU2, and JU3, and connect the clock signal to the CLKIN SMA connector. The clock signal connected to CLKIN input has to meet the CMOS-level requirements. The clock signal speed can be set up to 165MHz.

For differential clock mode, connect a shunt on jumper JU9, remove the shunts on jumpers JU1, JU2, and JU3, and connect the single-ended signal to the CLKD SMA connector. The clock signal can be either a sine or a square wave. A signal amplitude with a 1VP-P (4dBm) minimum is recommended. In differential clock mode, a single-ended clock signal is available at the CLKOUT SMA connector and can be used to synchronize the input data signals. See Table 1 for the clock input configuation.

## Table 1. Input Clock Configuration

| JU1, JU2, AND JU3 SHUNTS POSITION   | JU9 SHUNT POSITION   | EV KIT FUNCTION                                                                                                |
|-------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------|
| Installed                           | Not installed        | Single-ended input clock signal enabled; connect single-ended clock to CLKIN                                   |
| Not installed                       | Installed            | Differential input clock signal enabled; connect single- ended clock to CLKD, clock signal available at CLKOUT |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5854 Evaluation Kit

## Reference Voltage

The MAX5854 requires a reference voltage to set the full-scale output current. The MAX5854 integrates a stable on-chip bandgap reference of 1.24V that is used by default during initial  power-up. The internal reference can be disabled by writing the appropriate control word to channel A inputs. An external voltage reference must be connected to the REFO PC board pad when the internal voltage reference is disabled.

## Full-Scale Current

The MAX5854 requires an external resistor to set the fullscale output current. The MAX5854 EV kit full-scale current is set to 20mA with resistor R9. Replace resistor R9 to adjust the full-scale output current. Refer to the Internal Reference and Control Amplifier section in the MAX5854 data sheet to select different values for resistor R9.

## Differential Outputs

The MAX5854 outputs are configured for differential mode to achieve the best dynamic performance. Connect shunts across jumpers JU5, JU6, JU7, and JU8 to convert the differential signals to single-ended signals. Output transformers T3 and T4 convert the differential  DAC output signals to single-ended signals that are available at the OUTA and OUTB SMA connectors. The resistor networks at the DAC outputs are configured in such a way that the output impedance seen at  SMA connectors OUTA and OUTB is equal to 50 Ω . When outputs OUTA and OUTB are terminated with 50 Ω external loads, the full-scale output signal level is equal to -2dBm. The shunt on jumper JU4 should always be installed, unless it is required to shift the common-mode voltage of the DAC outputs. To evaluate the MAX5854 dynamic performance with increased output common-mode voltage, remove the shunt from jumper JU4 and connect a DC voltage source across the jumper. The DC source should be able to sink 45mA of current.

To evaluate the converter's single-ended outputs, remove the shunts from jumpers JU5, JU6, JU7, and JU8. Then probe the output signals between the jumper pins connected to the DAC outputs and the provided ground pads. In single-ended configuration, the DAC output signal amplitude is equal to 1VP-P at each of the outputs. See Table 2 for analog output signal configuration.

## Table 2. Analog Output Configuration

| JU5, JU6, JU7, AND JU8 SHUNTS POSITION   | EV KIT FUNCTION                                                                                                                              |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Installed                                | Differential analog output signals converted to single-ended signals; output signals available at OUTA and OUTB.                             |
| Not installed                            | The output signals can be differentially measured at jumpers JU5 and JU6 for channel A output, and jumpers JU7 and JU8 for channel B output. |

## Evaluating the MAX5853

The MAX5854 EV kit can be used to evaluate the MAX5853. The MAX5853 is a 10-bit DAC with a maximum conversion rate of 80Msps. The MAX5853 is pin compatible with the MAX5854. Replace the MAX5854 (U1) with the MAX5853 to evaluate it.

## Board Layout

The MAX5854 EV kit is a four-layer PC board design optimized for high-speed signals. All high-speed signal lines are routed through 50 Ω impedance-matched transmission lines. The length of these 50 Ω transmission lines  is  matched to within 40 mils (1mm) to minimize layout-dependent data skew. The PC board layout separates the digital, analog, and clock sections of the circuit for optimum dynamic performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX5854 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5854 Evaluation Kit

Figure 3. MAX5854 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX5854 EV Kit PC Board Layout-Component Side (Layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5854 Evaluation Kit

Figure 5. MAX5854 EV Kit PC Board Layout-Ground Planes (Layer 2)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX5854 EV Kit PC Board Layout-Power Planes (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5854 Evaluation Kit

Figure 7. MAX5854 EV Kit PC Board Layout-Solder Side (Layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600