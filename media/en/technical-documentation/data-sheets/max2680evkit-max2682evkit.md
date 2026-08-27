<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX2680/MAX2681/MAX2682 Evaluation Kits

## General Description

The MAX2680/MAX2681/MAX2682 evaluation kits (EV kits)  simplify  the  evaluation  of  the  MAX2680/ MAX2681/MAX2682 downconverter mixers. They enable testing of all device functions and require no additional support circuitry. Signal inputs and outputs use SMA connectors to ease the connection of RF test equipment.

All three EV kits share the same PC board but have RF input matching components optimized for each device at an RF frequency of 900MHz. Be sure to select the EV kit  for  the  device that meets your performance needs. Consult  the  Selector  Guide i n  the  MAX2680/ MAX2681/MAX2682 data sheet for the various combinations of power gain, input IP3, noise figure, and supply current offered by each device. The IF output matching components are optimized for an IF frequency of 70MHz. All matching components may be changed to match RF frequencies from 400MHz to 2.5GHz and IF frequencies from 10MHz to 500MHz. Consult Tables 2 and 4 in the MAX2680/MAX2681/ MAX2682 data sheet for component values appropriate for each device at other RF and IF operating frequencies.

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   | SOT TOP MARK   |
|---------------|----------------|--------------|----------------|
| MAX2680 EVKIT | -40°C to +85°C | 6 SOT23-6    | AAAR           |
| MAX2681 EVKIT | -40°C to +85°C | 6 SOT23-6    | AAAS           |
| MAX2682 EVKIT | -40°C to +85°C | 6 SOT23-6    | AAAT           |

## Component Suppliers

| SUPPLIER     | PHONE        | FAX          |
|--------------|--------------|--------------|
| AVX          | 803-946-0690 | 803-626-3123 |
| Coilcraft    | 847-639-6400 | 847-639-1469 |
| Toko America | 708-297-0070 | 708-699-1194 |

## Features

- ' Easy Evaluation of MAX2680/MAX2681/MAX2682
- ' Easy Evaluation of All Device Functions
- ' +2.7V to +5.5V Single-Supply Operation
- ' RF Input Matched to 50 Ω at 900MHz
- ' IF Output Matched to 50 Ω at 70MHz
- ' SMA Input and Output Signal Connectors
- ' All Critical Peripheral Components Included

## Components Common to All Three EV Kits

| DESIGNATION      |   QTY | DESCRIPTION                             |
|------------------|-------|-----------------------------------------|
| C1               |     1 | 270pF ceramic capacitor (0603)          |
| C2               |     1 | 15pF ceramic capacitor (0603)           |
| C3, C4, C6       |     3 | 1000pF ceramic capacitors (0603)        |
| C5               |     1 | 10µF, 10V tantalum capacitor (0805)     |
| C7, C8           |     2 | Open                                    |
| L1               |     1 | 330nH inductor Coilcraft 1008HS-330TJBC |
| R1               |     0 | Open                                    |
| R2               |     0 | Not installed, short                    |
| IF, LO, RF       |     3 | SMA connectors (edge mount)             |
| JU1              |     1 | 3-pin header                            |
| GND, V CC , SHDN |     3 | Eyelets                                 |
| None             |     1 | MAX2680/MAX2681/MAX2682 PC board        |

## MAX2680 EV Kit Additional Components

| DESIGNATION   |   QTY | DESCRIPTION                      |
|---------------|-------|----------------------------------|
| Z1            |     1 | 270pF ceramic capacitor (0603)   |
| Z2            |     1 | 22nH inductor Toko LL1608-FH22NJ |
| Z3            |     0 | Open                             |
| U1            |     1 | MAX2680EUT-T (6-pin SOT23)       |

1

## MAX2680/MAX2681/MAX2682 Evaluation Kits

## MAX2681 EV Kit Additional Components

| DESIGNATION   |   QTY | DESCRIPTION                      |
|---------------|-------|----------------------------------|
| Z1            |     1 | 270pF ceramic capacitor (0603)   |
| Z2            |     1 | 18nH inductor Toko LL1608-FHI8NJ |
| Z3            |     0 | Open                             |
| U1            |     1 | MAX2681EUT-T (6-pin SOT23)       |

## Quick Start

The MAX2680/MAX2681/MAX2682 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the recommended test equipment to verify  the  operation  of  the  MAX2680/MAX2681/ MAX2682. It is intended as a guide only, and some substitutions are possible.

- DC power supply capable of supplying a minimum of 50mA at +2.7V to +5.5V
- HP8561E spectrum analyzer or equivalent highsensitivity spectrum analyzer
- Digital multimeter (DMM) to monitor DC supply voltage and supply current (if desired)
- Two HP8648C RF signal generators or equivalent (50 Ω ) sine-wave sources for the RF and LO inputs
- Three 50 Ω SMA cables (RG-58A/U or equivalent)

## Connections and Setup

- 1) Verify the DC power supply is set to less than +5.5V and is off before connecting the supply to the EV kit.  A  good  starting  point  is  +3.0V.  Connect  the power supply between VCC and GND, and turn the power supply on.
- 2) Verify the jumper JU1 is in the 'on' position, pin 1 shorted to pin 2 ( SHDN = VCC).
- 3) Use a 50 Ω SMA cable to connect a signal generator to the SMA RF connector of the EV kit.  Set the signal generator's output frequency to 900MHz and output power level to -25dBm.
- 4) Use another 50 Ω SMA cable to connect a second signal generator to the SMA LO connector of the EV kit.  Set  the  second  signal  generator's  output  fre-

## MAX2682 EV Kit Additional Components

| DESIGNATION   |   QTY | DESCRIPTION                      |
|---------------|-------|----------------------------------|
| Z1            |     1 | 1.5pF ceramic capacitor (0603)   |
| Z2            |     1 | 270pF ceramic capacitor (0603)   |
| Z3            |     1 | 10nH inductor Toko LL1608-FH10NJ |
| U1            |     1 | MAX2682EUT-T (6-pin SOT23)       |

- quency to 970MHz and output power level to -5dBm.
- 5) Use a third 50 Ω SMA cable to connect the IF connector of the EV kit to the spectrum analyzer. Take care to use quality connector adapters for the spectrum analyzer's input. Avoid the use of BNCtype connectors due to their high VSWR while operating in the GHz range.

## Analysis

- 1) Set the spectrum analyzer's center frequency to 70MHz, with a frequency span of 1MHz.
- 2) Set the spectrum analyzer's marker to read the peak power level of the center frequency. For the MAX2680 the IF power level is nominally -13.4dBm. The IF output power is equal to the RF input power plus the conversion gain of the downconverter mixer. The MAX2680 has a typical conversion gain of  11.6dB. The MAX2681 has a typical conversion gain of 14.2dB. The MAX2682 has a typical conversion gain of 14.7dB.

## Detailed Description

This section describes the circuitry surrounding the MAX2680/MAX2681/MAX2682 EV kits. For more detailed information covering device operation, please consult the MAX2680/MAX2681/MAX2682 data sheet.

Figure 1 is the schematic for the MAX2680/MAX2681/ MAX2682 EV kits. The RF input matching components Z1, Z2, and Z3 are optimized for each device and for an RF frequency of 900MHz. A DC-blocking capacitor is required on the RF port. The IF output matching components, L1 and C2, are optimized  for an IF frequency of  70MHz and are independent of the device chosen. Consult Tables 2 and 4 in the MAX2680/MAX2681/ MAX2682 data sheet for components appropriate for each device at other RF and IF frequencies. Capacitor

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2680/MAX2681/MAX2682 Evaluation Kits

C1 is a DC-blocking capacitor and is required for the LO input port. Pads C7 and C8 are left open on the EV kits, but are provided for experimentation. Pad R1 is left open on the kits, but is provided as an option to resistively terminate the IFOUT port.

Capacitors C4, C5, and C6 form the VCC decoupling network. Note the location of each component. C5, a 10µF tantalum capacitor, is located near the VCC connector. This serves as the central node for distribution of VCC to the mixer's supply pin and the IFOUT output pull-up inductor L1. Capacitor C6, placed near the VCC connection, and capacitor C4, placed near the device, help to reduce any high-frequency crosstalk. Capacitor C3, placed near the SHDN pin on the device, helps to filter out any noise. For additional filtering, add resistor R2 to the EV kit after cutting the short across the pads for R2.

## Modifying the EV Kit

The MAX2680/MAX2681/MAX2682 EV kits are easily used at RF frequencies from 400MHz to 2500MHz, and at IF frequencies from 10MHz to 500MHz. To operate at frequencies other than the factory configuration of 900MHz RF and 70MHz IF, refer to Tables 2 and 4 in the MAX2680/MAX2681/MAX2682 data sheet for the suggested component values. For operation at frequencies other than those given here, consult the graphs RF Port  Impedance  vs.  RF  Frequency  and  IF  Port Impedance vs. IF Frequency in the Typical Operating Characteristics in  the  MAX2680/MAX2681/MAX2682 data sheet and follow typical impedance matching methods.

<!-- image -->

Figure 1.  MAX2680/MAX2681/MAX2682 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2680/MAX2681/MAX2682 Evaluation Kits

<!-- image -->

Figure 2.  MAX2680/MAX2681/MAX2682 EV Kits PC Board Layout -Component Silkscreen

Figure 3.  MAX2680/MAX2681/MAX2682 EV Kits PC Board Layout -Component Side Metal

<!-- image -->

Figure 4.  MAX2680/MAX2681/MAX2682 EV Kits PC Board Layout -Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4