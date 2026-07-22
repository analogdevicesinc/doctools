<!-- lastmod 2022-08-04 -->
## General Description

The MAX2015 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that allows for easy evaluation of the MAX2015 RF power detector/ controller. The MAX2015 EV kit includes connections to operate the device as a detector or as a controller. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1, C2        |     2 | 680pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H681J           |
| C3, C5        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J           |
| C4, C6        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K          |
| C7            |     1 | 10µF ±10%,16V tantalum capacitor (C case) AVX TAJC106K016R                   |
| C8            |     0 | Not installed (0603)                                                         |
| J1-J4         |     4 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| R1-R5         |     5 | 0 Ω (0603) resistors                                                         |
| R6, R7        |     0 | Not installed (0603)                                                         |
| TP1           |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent     |
| TP2           |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent   |
| U1            |     1 | MAX2015EUA-T                                                                 |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the device, do not turn on the DC power or the RF signal generator until all connections are made:

- 1) With the DC power supply disabled, set it to +3.3V (through a low internal resistance ammeter, if desired) and connect to the VCC terminal. Connect the power-supply ground to the GND terminal on the EV kit. If available, set the current limit to 25mA.
- 2) Calibrate the power meter at 100MHz.
- 3) Connect the RF signal generator to the power meter through a 6dB attenuator pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

- ♦ Complete RF Power Detector/Controller
- ♦ 50MHz to 2.7GHz Frequency Range
- ♦ 2.7V to 5.25V Single-Supply Operation*
- ♦ 50 Ω SMA Connector on RF Input
- ♦ Fully Assembled and Tested Surface-Mount Board

* See EV Kit Schematic (Figure 3).

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2015EVKIT | -40°C to +85°C | 8 µMAX       |

## Quick Start

The MAX2015 EV kit is fully assembled and factory tested. See the Connections and Setup section for proper device evaluation.

## Recommended Equipment

- DC power supply capable of delivering between 2.7V and 3.6V at 25mA
- Signal generator capable of delivering -70dBm to +10dBm at frequencies between 50MHz and 2.7GHz
- High-dynamic-range RF power meter for calibrating the signal generator
- Three digital multimeters (DMMs) to monitor supply voltage, supply current, and output voltage
- 6dB attenuator pad

## MAX2015 Evaluation Kit

Figure 1. MAX2015 EV Kit Test Setup Diagram

<!-- image -->

- 4) Calibrate the signal generator output (f = 100MHz) over the desired power range.

Note: Some power meters may be limited in terms of their dynamic range.

- 5) Disable the RF signal generator output power. Disconnect the power meter from the attenuator pad and connect this pad output to the RF\_IN SMA on the EV kit.
- 6) Connect the VOUT SMA to a voltmeter through the appropriate adapters. Enable the DC power supply. The DC current of the EV kit should be approximately 17mA.
- 7) Enable the output power of the RF signal generator.
- 8) Using the calibration results from step 4, set the generator output at the level that produces -30dBm into RF\_IN.
- 9) Verify that an output voltage of approximately 1.35V is measured on the voltmeter.
- 10) Adjust the signal-generator power level up and down to see a corresponding change in VOUT.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX2015 EV kit is a fully assembled and tested surface-mount circuit board that evaluates the MAX2015 RF power detector/controller. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

## Detector Mode

The MAX2015 EV kit is assembled with a 0 Ω resistor for R1. This sets the slope of the output signal to approximately 19mV/dB (RF = 100MHz). To increase the slope of the output signal, increase the value of R1. For example, if a 4.7k Ω resistor is used, the slope increases to approximately 21.7mV/dB. Setting the slope too high causes the output of the log amp to be voltage limited at high RF power levels, thus reducing dynamic range. For more information, refer to the Applications Information section in the MAX2015 data sheet.

<!-- image -->

Figure 2. MAX2015 in Controller Mode

<!-- image -->

## Controller Mode

For operation in controller mode, remove R1 and set R6 to 0 Ω .  Use a DAC or external precision voltage supply to apply the set-point voltage to the VSET SMA connector. RF\_IN is connected to the RF source (power amplifier (PA) output through a directional coupler) and VOUT is connected to the gain-control pin of the PA (see Figure 2 ) .

## MAX2015 Evaluation Kit

## Shutdown Mode

The EV kit is configured with the shutdown feature disabled. To use the shutdown feature first remove R5. Drive PWDN with a logic-low (0V) for normal operation or a logic-high (VCC) to place the device in shutdown mode. Leave the VCC power supply on and turn off the RF power when switching the shutdown pin.

## Layout Considerations

A good PC board is an essential part of RF circuit design. The MAX2015 EV kit PC board can serve as a guide for laying out a board using the MAX2015. Keep the input trace carrying RF signals as short as possible to  minimize radiation and insertion loss due to the PC board. Each power-supply node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the PC board to another. Using a star topology for the supply layout, in  which each power-supply node in the circuit has a separate connection to the central node, can further minimize coupling between sections of the PC board.

## Modifying the EV Kit

The EV kit design includes some additional resistors (R2, R3, R4) to provide for possible power-supply filtering and for  high  power-supply voltage operation. For operation where VCC = 2.7V to 3.6V (TP1), set R4 = 0 Ω . For operation  where VCC = 4.75V to 5.25V, set R4 = 75 Ω ±1% (100ppm/°C  max)  and  connect  PWDN  to  GND (required). The output load for VOUT can be changed by including the values for R7 and C8.

<!-- image -->

Figure 3. MAX2015 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2015 Evaluation Kit

<!-- image -->

Figure 4. MAX2015 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 6. MAX2015 EV Kit PC Board Layout-Top Layer Metal

Figure 5. MAX2015 EV Kit PC Board Layout-Top Solder Mask

<!-- image -->

Figure 7. MAX2015 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 8. MAX2015 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 10. MAX2015 EV Kit PC Board Layout-Bottom Solder Mask

<!-- image -->

## MAX2015 Evaluation Kit

Figure 9. MAX2015 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 11. MAX2015 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5