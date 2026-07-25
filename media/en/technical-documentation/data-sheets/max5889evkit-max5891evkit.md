<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5889/MAX5890/MAX5891 Evaluation Kits

## General Description

The MAX5889, MAX5890, and MAX5891 evaluation kits (EV kits) are each fully assembled and tested printedcircuit  boards  (PCBs) that contain all the components necessary  to  evaluate  the  performance  of  the MAX5889, MAX5890, and MAX5891 600Msps digitalto-analog converters (DACs). All three DACs feature LVDS inputs, integrated 1.2V bandgap voltage references, and differential current outputs. The three EV kits use the same PCB and components except for the DACs. The MAX5889, MAX5890, and MAX5891 are 12bit,  14-bit,  and  16-bit  DACs,  respectively.  The  EV  kits operate with LVDS-compatible digital data inputs, a single-ended clock input, and a 3.3V/1.8V dual power supply for simple board operation. The EV kits feature differential current to single-ended voltage output conversion circuitry and offer an external 1.25V voltage reference that can be used to overdrive the integrated voltage reference.

## Component List

| DESIGNATION                  |   QTY | DESCRIPTION                                                                                     |
|------------------------------|-------|-------------------------------------------------------------------------------------------------|
| C1-14, C33, C37, C38         |    17 | 0.1µF ± 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104KT or Taiyo Yuden LMK105BJ104KV |
| C15-C19                      |     5 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105KT                                |
| C20-C24                      |     5 | 10µF ± 10%, 10V tantalum capacitors (A) AVX TAJA106K010R or KEMET T494A106K010AS                |
| C25-C29                      |     5 | 47µF ± 10%, 6.3V tantalum capacitors (B) AVX TAJB476K006R or KEMET T494B476K006AS               |
| C30, C31, C32, C34, C35, C36 |     0 | Not installed, ceramic capacitors (0603)                                                        |
| CLK, OUTPUT                  |     2 | SMA PC mount vertical connectors                                                                |
| J1, J2                       |     2 | 2 x 20-pin surface-mount headers (0.1in)                                                        |
| JU1-JU4                      |     4 | 2-pin headers                                                                                   |
| L1-L5                        |     5 | Ferrite bead cores (0805) Fair-Rite 2508051217Z0                                                |

## Part Selection Table

| PART        |   RESOLUTION (BITS) |
|-------------|---------------------|
| MAX5889EGK+ |                  12 |
| MAX5890EGK+ |                  14 |
| MAX5891EGK+ |                  16 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Features

- ♦ Enables Fast Evaluation and Performance Testing
- ♦ On-Board External 1.25V Voltage Reference Circuit
- ♦ SMA Coaxial Connectors for Clock Input and Analog Output
- ♦ LVDS-Compatible Inputs
- ♦ Full-Scale Current Output Configured for 20mA
- ♦ 50 Ω Matched Clock Input and Analog Output Signal Lines
- ♦ Single-Ended-to-Differential Clock Signal Conversion Circuitry
- ♦ Differential Current to Single-Ended Voltage Output Conversion Circuitry
- ♦ Fully Assembled and Tested

## Ordering Information

| PART                         | TEMP RANGE          | IC PACKAGE   |
|------------------------------|---------------------|--------------|
| MAX5889EVKIT # 0°C           | to +70°C* 68 QFN-EP |              |
| MAX5890EVKIT # 0°C to +70°C* | 68                  | QFN-EP       |
| MAX5891EVKIT #               | 0°C to +70°C*       | 68 QFN-EP    |

EP = Exposed paddle.

## MAX5889/MAX5890/MAX5891 Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                 |
|---------------|-------|-------------------------------------------------------------|
| OUTIP, OUTIN  |     0 | Not installed, SMA PC mount vertical connectors             |
| R1, R2        |     2 | 49.9 Ω ±0.1% resistors (0603) IRC PFC-W0603RLF-03-49R9-B    |
| R3            |     1 | 100 Ω ±1% resistor (0603)                                   |
| R4            |     1 | 2k Ω ±1% resistor (0603)                                    |
| R5, R6        |     2 | 24.9 Ω ±1% resistors (0603)                                 |
| R7, R8        |     0 | Not installed, resistors (0603)                             |
| T1, T2        |     2 | Transformers Mini-Circuits ADTL1-12+                        |
| T3            |     1 | 1:1 transformer Coilcraft TTWB-1-B                          |
| U1            |     1 | See the EV Kit Specific Component List                      |
| U2            |     1 | 1.25V voltage reference (SO-8) MAX6161BESA+ or MAX6161AESA+ |
| -             |     4 | Shunts (JU1-JU4)                                            |
| -             |     1 | PCB: MAX5891/90/89 Evaluation Kit#                          |

## EV Kit Specific Component List

| EV KIT PART NUMBER   | DESIGNATION   | DESCRIPTION                              |
|----------------------|---------------|------------------------------------------|
| MAX5889EVKIT#        | U1            | MAX5889EGK(68-pin, 10mmx10mm,QFNwith EP) |
| MAX5890EVKIT#        | U1            | MAX5890EGK(68-pin, 10mmx10mm,QFNwith EP) |
| MAX5891EVKIT#        | U1            | MAX5891EGK(68-pin, 10mmx10mm,QFNwith EP) |

## Quick Start

## Recommended Equipment

- Three 3.3V, 100mA power supplies
- Two 1.8V, 100mA power supplies
- One signal generator with low phase noise and low jitter for clock input (e.g., HP 8664A)
- One signal generator for pattern generator synchronization (e.g., HP 8664A)
- One LVDS digital pattern generator for data inputs (e.g., HP 81250)
- Spectrum analyzer (e.g., HP 8560E)
- Voltmeter

The EV kit is a fully assembled and tested surfacemount board. Follow the steps below for board operation. Caution: Do not turn on power supplies or enable signal generators until all connections are completed (Figure 1).

- 1) Verify  that  shunts  are  not  installed  across  jumper JU1 (normal operation).
- 2) Verify that shunts are installed across jumpers JU2 and JU3 (external reference).
- 3) Synchronize the digital pattern generator with the clock signal generator (Figure 1).
- 4) Connect the clock signal generator to the EV kit CLK SMA connector.
- 5) Verify that the digital pattern generator HP 81250 is programmed for valid LVDS voltage levels.
- 6) Connect the digital pattern generator output to the input  header connectors J1 and J2 on the EV kit board. See Table 1 for MAX5889, MAX5890, and MAX5891 EV kit header pin configurations.

## Component Suppliers

| SUPPLIER                 | PHONE        | FAX          | WEBSITE               |
|--------------------------|--------------|--------------|-----------------------|
| AVX Corp.                | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Coilcraft, Inc.          | 847-639-6400 | 847-639-1469 | www.coilcraft.com     |
| Fair-Rite Products Corp. | 845-895-2055 | 845-895-2629 | www.fair-rite.com     |
| IRC, Inc.                | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| KEMET Corp.              | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Mini-Circuits            | 718-934-4500 | 718-934-7092 | www.minicircuits.com  |
| Taiyo Yuden              | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK Corp.                | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX5889, MAX5890, or MAX5891 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Figure 1. MAX5889/MAX5890/MAX5891 EV Kit Quick Start Setup

<!-- image -->

- 7) Connect a 1.8V power supply to the AVDD1 PCB pad. Connect the ground terminal of this supply to the AGND PCB pad.
- 8) Connect a 3.3V power supply to the AVDD2 PCB pad. Connect the ground terminal of this supply to the AGND PCB pad.
- 9) Connect a 1.8V power supply to the DVDD1 PCB pad. Connect the ground terminal of this supply to the DGND PCB pad.
- 10) Connect a 3.3V power supply to the DVDD2 PCB pad. Connect the ground terminal of this supply to the DGND PCB pad.
- 11) Connect a 3.3V power supply to the VDD\_CK PCB pad. Connect the ground terminal of this supply to the CGND PCB pad.
- 12) Turn on all five power supplies.
- 13) Set the clock signal generator output power between +8dBm to +12dBm and the frequency (fCLK) to ≤ 600MHz.
- 14) Enable the clock signal generator and the digital pattern generator.
- 15) Use the spectrum analyzer to view the output spectrum or view the output waveform by connecting an oscilloscope to the OUTPUT SMA connector on the EV kit.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Table 1. MAX5889/MAX5890/MAX5891 EV Kit Board Connector Guide (J1 and J2)

| EV KIT CONNECTOR PIN   | MAX5891 INPUT   | MAX5890 INPUT   | MAX5889 INPUT   |
|------------------------|-----------------|-----------------|-----------------|
| J1-31                  | D15P (MSB)      | D13P (MSB)      | D11P (MSB)      |
| J1-29                  | D15N (MSB)      | D13N (MSB)      | D11N (MSB)      |
| J1-27                  | D14P            | D12P            | D10P            |
| J1-25                  | D14N            | D12N            | D10N            |
| J1-23                  | D13P            | D11P            | D9P             |
| J1-21                  | D13N            | D11N            | D9N             |
| J1-19                  | D12P            | D10P            | D8P             |
| J1-17                  | D12N            | D10N            | D8N             |
| J1-15                  | D11P            | D9P             | D7P             |
| J1-13                  | D11N            | D9N             | D7N             |
| J1-11                  | D10P            | D8P             | D6P             |
| J1-9                   | D10N            | D8N             | D6N             |
| J1-7                   | D9P             | D7P             | D5P             |
| J1-5                   | D9N             | D7N             | D5N             |
| J1-3                   | D8P             | D6P             | D4P             |
| J1-1                   | D8N             | D6N             | D4N             |
| J2-39                  | D7P             | D5P             | D3P             |
| J2-37                  | D7N             | D5N             | D3N             |
| J2-35                  | D6P             | D4P             | D2P             |
| J2-33                  | D6N             | D4N             | D2N             |
| J2-31                  | D5P             | D3P             | D1P             |
| J2-29                  | D5N             | D3N             | D1N             |
| J2-27                  | D4P             | D2P             | D0P (LSB)       |
| J2-25                  | D4N             | D2N             | D0N (LSB)       |
| J2-23                  | D3P             | D1P             | N.C.            |
| J2-21                  | D3N             | D1N             | N.C.            |
| J2-19                  | D2P             | D0P (LSB)       | N.C.            |
| J2-17                  | D2N             | D0N (LSB)       | N.C.            |
| J2-15                  | D1P             | N.C.            | N.C.            |
| J2-13                  | D1N             | N.C.            | N.C.            |
| J2-11                  | D0P (LSB)       | N.C.            | N.C.            |
| J2-9                   | D0N (LSB)       | N.C.            | N.C.            |

## Detailed Description

The MAX5889/MAX5890/MAX5891 EV kits are designed to  simplify the evaluation of the MAX5889 (12-bit), MAX5890 (14-bit), and MAX5891 (16-bit) 600Msps, current-output DACs. The MAX5889/ MAX5890/MAX5891 converters operate with LVDS-compatible digital data inputs, a differential or single-ended clock input signal, and at least two power supplies (3.3V and 1.8V). The MAX5889/MAX5890/MAX5891 feature an internal 1.2V voltage reference.

The EV kits provide header connectors, J1 and J2, to interface with a pattern generator, circuitry that converts the differential current outputs to single-ended voltage signal.  Additionally,  a  circuit  is  provided  to  convert  a user-supplied single-ended clock signal to a differential clock. The EV kit circuits also include an external 1.25V reference source U2 (MAX6161) and a test point connector,  TP1,  that  can  be  used  to  overdrive  the MAX5891 DAC's internal 1.2V bandgap reference. The EV kit PCB layout separates the circuit power into digital, analog, and clock planes to improve dynamic performance. The input data PCB traces are 100 Ω differential controlled impedance and the analog output PCB traces are 50 Ω controlled impedance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5889/MAX5890/MAX5891 Evaluation Kits

## Power Supplies

The EV kits can operate from a single 1.8V power supply connected to the DVDD1 and AVDD1 input power pads, and a single 3.3V power supply connected to the DVDD2, AVDD2, and VDD\_CK input power pads for simple operation. However, five separate power supplies  are  recommended to optimize dynamic performance. The EV kit PCB layout is divided into three sections: digital, analog, and clock. Using separate power supplies for each section reduces noise and improves the integrity  of  the  analog  output  signal.  When  using separate power supplies connect a 1.8V power supply across the DVDD1 and DGND pads and a 3.3V power supply across the DVDD2 and DGND pads (digital). Connect a 1.8V power supply across the AVDD1 and the  AGND pads and a 3.3V power supply across the AVDD2 and the AGND pads (analog). Connect a 3.3V power supply across the VDD\_CK and the CGND pads (clock).

## LVDS Digital Input Data

The MAX5889/MAX5890/MAX5891 EV kits provide two 0.1in 2 x 20 headers (J1, J2) to interface an LVDS pattern generator to the EV kit. The header data pins labeled on the MAX5889/MAX5890/MAX5891 EV kit PCB are aligned with the MAX5891 DAC data input pins. See Table 1 to align the MAX5890 and MAX5889 input data bits from the pattern generator to the corresponding data pins on headers J1 and J2. The input data is latched on the rising edge of the clock signal.

## Clock Signal

The MAX5889/MAX5890/MAX5891 operate with a differential clock input signal. However, the EV kit boards only require an external single-ended clock signal connected to the CLK SMA connector. The EV kit features circuitry that converts a single-ended clock signal to a differential  clock  signal.  The  clock  signal  should  be  a low-jitter sine or square wave. A minimum signal power amplitude of +8dBm is recommended to drive the clock input. The DACs accept a clock input frequency range of 1MHz to 600MHz.

## Reference Voltage

The MAX5889/MAX5890/MAX5891 DACs require a reference voltage to set the full-scale output current of the DAC. The MAX5889/MAX5890/MAX5891 integrate a stable on-chip bandgap reference of 1.2V that is selected by default during initial power-up. An external voltage reference can be connected to test point TP1 to overdrive the internal voltage reference. The EV kit circuit also features an on-board, external 1.25V reference (U2, MAX6161) that can be used to overdrive the internal voltage reference. U2 has a tighter voltage output tolerance and is less susceptible to temperature variations. See Table 2 to select the voltage reference source.

<!-- image -->

## Table 2. Reference Voltage Source (JU2 and JU3)

| SHUNT POSITION   | SHUNT POSITION   | REFIO PIN CONNECTION                                              | EV KIT FUNCTION                                                         |
|------------------|------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| JU2              | JU3              |                                                                   |                                                                         |
| Not installed    | Not installed    | Open (REFIO becomes the output of the internal bandgap reference) | Internal 1.2V reference enabled or connect an external reference to TP1 |
| Installed*       | Installed        | Connected to U2 (MAX6161)                                         | U2 provides a precise 1.25V voltage reference                           |

## Full-Scale Output Current

The MAX5889/MAX5890/MAX5891 require an external resistor to set the full-scale output current. The EV kit fullscale current is set to 20mA with resistor R4. Replace resistor R4 to adjust the full-scale output current. Refer to the Reference Architecture and Operation section in the MAX5889/MAX5890/MAX5891 corresponding IC data sheets to select different values for resistor R4.

## Outputs

To achieve the best dynamic performance, the MAX5889/MAX5890/MAX5891 outputs are configured for  differential  current  mode.  The  resistor  and  transformer network at the DAC output is designed to convert  the  differential  current  to  a  single-ended  voltage signal with a 50 Ω output impedance. When the OUTPUT connector is terminated with a 50 Ω external load, the full-scale output signal level equals -2dBm.

To evaluate the converter's single-ended outputs, remove transformer T1. Probe the single-ended signals at the OUTIP and OUTIN SMA connectors (must be installed). In single-ended configuration the DAC output signal amplitude is equal to 1VP-P at each of the outputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

## Power-Down Mode

The DAC power-down/normal operation mode can be configured with jumper JU1. See Table 3 for jumper JU1 configuration.

Table 3. Power-Down Mode (JU1)

| SHUNT POSITION   | PD PIN CONNECTION      | EV KIT FUNCTION   |
|------------------|------------------------|-------------------|
| Installed        | Connected to DVDD2     | Power-down mode   |
| Not installed    | Internally pulled down | Normal operation  |

## PCB Layout

The MAX5889/MAX5890/MAX5891 EV kits are four-layer PCBs optimized for high-speed signals. All high-speed digital signal lines are routed through 100 Ω differential impedance-matched transmission lines. All analog output traces are routed through 50 Ω i mpe-dancematched transmission lines. The lengths of these 100 Ω and 50 Ω transmission lines are matched to within 40 mils (1mm) to minimize layout-dependent data skew. The PCB layout separates the digital, analog, and clock sections of the circuit for optimum performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5889/MAX5890/MAX5891 Evaluation Kits

<!-- image -->

Figure 2. MAX5891 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Figure 3. MAX5890 EV Kit Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

<!-- image -->

Figure 4. MAX5889 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Figure 5. MAX5891/MAX5890/MAX5889 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5889/MAX5890/MAX5891 Evaluation Kits

<!-- image -->

Figure 6. MAX5891/MAX5890/MAX5889 EV Kit PCB Layout-Component Side (Layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Figure 7. MAX5891/MAX5890/MAX5889 EV Kit PCB Layout-Ground Planes (Layer 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

<!-- image -->

Figure 8. MAX5891/MAX5890/MAX5889 EV Kit PCB Layout-Power Planes (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5889/MAX5890/MAX5891 Evaluation Kits

Figure 9. MAX5891/MAX5890/MAX5889 EV Kit PCB Layout-Solder Side (Layer 4)

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-6, 10-14

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600