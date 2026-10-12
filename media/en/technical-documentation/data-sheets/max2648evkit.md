<!-- lastmod 2022-08-02 -->
## General Description

The MAX2648 evaluation kit (EV kit) simplifies the evaluation of the MAX2648 5GHz low-noise amplifier. It enables testing of the device's performance and requires no additional support circuitry. All inputs and outputs use SMA connectors to facilitate easy connection of RF test equipment.

This EV kit is factory-tuned for operation in the 5150MHz to 5350MHz band but can be retuned for operation in any band from 5000MHz to 6000MHz. Table 1 provides component selection information to retune the MAX2648 for operation in the 5725MHz to 5825MHz band. Consult the MAX2648 device S-parameter and noise parameter data (Tables 1 and 2 of the MAX2648 data sheet) to design a matching network for any other band.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1, C2, C6    |     3 | 100pF ±5% ceramic capacitors (0402) Murata GRM36COG101J050A              |
| C3            |     1 | 1000pF ±10% ceramic capacitor (0402) Murata GRM36X7R102K050A             |
| C4            |     1 | 0.01µF ±10% ceramic capacitor (0402) Murata GRM36X7R103K016A             |
| C5            |     1 | 0.01µF ±10% ceramic capacitor (1206) Murata GRM42-6X7R103K2000A          |
| C7            |     1 | 1.0pF ±0.05pF ATC 500-series porcelain capacitor (0603) ATC 5001R0AT100X |

## MAXIM

<!-- image -->

Features

- ♦ Easy Evaluation of MAX2648
- ♦ +2.7V to +3.6V Single-Supply Operation
- ♦ All Peripheral Components Included
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX2648EVKIT | -40 ° C to +85 ° C | 2 ✕ 3 UCSP   |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE            |
|------------|--------------|--------------|--------------------|
| ATC        | 631-622-4700 | 631-622-4748 | www.atceramics.com |
| Coilcraft  | 800-322-2645 | 847-639-1469 | www.coilcraft.com  |
| EFJohnson  | 402-474-4800 | 402-474-4858 | www.efjohnson.com  |
| Kamaya     | 219-489-1533 | 219-489-2261 | www.kamaya.com     |
| Murata     | 770-436-1300 | 770-436-3030 | www.murata.com     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C8            |     1 | 0.9pF ±0.05pF ATC 500-series porcelain capacitor (0603) ATC 500S0R9AT100X |
| J1, J2        |     2 | SMA connectors, edge mount EFJohnson 142-0701-851                         |
| L1            |     1 | 22nH wirewound inductor (0805) Coilcraft 0805CS-220XJBC                   |
| R2            |     1 | 8.2 Ω ±1% resistor (0402) Kamaya RMC16S-08R2FTH                           |
| U1            |     1 | MAX2648EBT, 2 ✕ 3 UCSP                                                    |
| VCC, GND      |     2 | Test points DigiKey 5000-ND                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2648 Evaluation Kit

## Quick Start

The MAX2648 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2648. It is intended as a guide only, and some substitutions are possible.

- One DC power supply, +2.7V to +3.6V output
- One RF vector network analyzer capable of making accurate measurements up to 6GHz (the HP/Agilent 8753D or 8753E with option 006 work nicely)
- Calibration kit for vector network analyzer
- Two high-quality 50 Ω SMA cables

## Connections and Setup

- 1) Allow the vector network analyzer to warm up, and configure it for the following:
- Stimulus power level = -30dBm
- Linear frequency sweep: 5000MHz to 6000MHz, at least 201 points
- Turn on averaging, at least four sweeps
- 2) Connect SMA cables to VNA, and perform a full  2-port  calibration,  omitting  the  isolation calibration if desired. Save this setup for recall later, makng sure that the calibration array is included in this saved state.
- 3) Connect the EV kit to the VNA.
- 4) Verify  the  DC  power supply is set no higher than +3.6V and is off before connecting the supply to the

## Table 1. Replacement Matching Elements for 5800MHz Band

| DESIGNATION                                 | QTY                                         | DESCRIPTION                                              |
|---------------------------------------------|---------------------------------------------|----------------------------------------------------------|
| 5725MHz to 5825MHz (HiperLAN/2, upper-UNII) | 5725MHz to 5825MHz (HiperLAN/2, upper-UNII) | 5725MHz to 5825MHz (HiperLAN/2, upper-UNII)              |
| C7                                          | 1                                           | 0.7pF high-Q porcelain capacitor (0603) ATC500S0R7AT100X |
| C8                                          | 1                                           | 0.8pF high-Q porcelain capacitor (0603) ATC500S0R8AT100X |

EV kit.  A  good  starting  voltage  is  +3.0V.  Connect the power supply between VCC and GND, and power up the kit.

- 5) Restart averaging on the VNA, and verify that it measures some forward gain. If the measurement appears to be in error, verify the quality of the calibration by replacing the EV kit with an SMA through. Repeat the calibration procedure if necessary.

## Analysis

Set the vector network analyzer to measure forward gain (S21). Peak gain should be about 17dB at 5250MHz. Verify input return loss, output return loss, and reverse isolation if so desired.

## Detailed Description

This section describes the circuitry surrounding the IC in  the  MAX2648 EV kits. For more detailed information covering  device  operation,  please  consult  the MAX2648 data sheet.

Figure 1. MAX2648 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The schematic for the MAX2648 EV kit is shown in Figure 1. Looking at the input and output transmission lines,  capacitors C1 and C6 are 100pF DC-blocking capacitors. Capacitors C2 and C3 form the local VCC decoupling network. A larger 0.01µF decoupling capacitor  sits  further  from  the  IC,  and an RC filter formed by C4 and R2 provides still more supply filtering.

Shunt-capacitor tuning elements C7 and C8 are ultrahigh-Q porcelain capacitors from ATC. Their value is determined by the following factors: 1) the desired band of operation; 2) the position on the transmission line between the DC block and the IC; and 3) Z0 of that transmission line. The values provided in this EV kit will most likely not provide optimal performance at 5.25GHz if  a  different  PC  board  material or layout is used. Although the matching network component values provided here will offer a rough estimate of values for a new design, refer to Tables 1 and 2 in the MAX2648 data sheet when designing matching networks for a particular application.

The MAX2648's output is an open-collector transistor, and must be biased to VCC through an RF choke. RF choke inductor L1 is placed as close to the output transmission line as possible, so that its mounting pad nearest the IC does not have the effect of a tuning stub. If PC board space allows, the output stage can alternatively be biased through a high-Z0 quarter-wave transmission line, which is AC-shorted to ground on the VCC side.

Good grounding is essential for optimum performance. Note the numerous plated vias from the top ground plane to the signal ground plane-ground discontinuities can cause unpredictable parasitics and make production-run tuning all but impossible. The high-frequency layer of the evaluation board is constructed from Rogers RO4350 (10mil distance to ground plane) microwave laminate, a cost-effective PC board material that  offers  a  low  dielectric  constant  (to  keep  electrical lengths manageable), a low loss tangent, and is compatible with conventional FR-4 fabrication methods.

<!-- image -->

## MAX2648 Evaluation Kit

Handling chip-scale packages requires special care and considerations; refer to Maxim's technical article Wafer-Level  Ultra-Chip-Scale  Package (at www.maxim-ic.com ).

## Prototype Chip Installation

Alignment keys on the PC board around the area where the chip is located will be helpful in the prototype assembly process. The MAX2648 EV kit PC board has L-shaped alignment keys at the diagonal corners of the chip. It is best to align the chip on the board before any other components are placed, and then place the board on a hotplate until the solder begins to flow. After about 20 seconds, carefully remove the board from the hotplate without disturbing the position of the IC, and let it cool down to room temperature before stuffing any more components. It is often difficult to know when the solder balls on the UCSP are flowing. Watch for nearby capacitors or inductors to start flowing-a good rule of thumb is that if they are flowing, then so is the IC.

Rework for UCSP ICs can be tricky and requires patience and experience. To remove an IC, place the PC board on a hotplate preheated to about 300°C until the IC begins to reflow. Again, use nearby components as a cue. Remove the IC so as not to disturb other components. Remove the PC board from the hotplatedo not attempt to solder a new IC yet. Allow the PC board to cool and, under a microscope, carefully clean the residual solder and flux away from the mounting pads. Now repeat the steps above to reinstall the IC.

In rework situations, it might be advantageous to perch the PC board up on a small aluminum block, or even a steel nut, so that heat is conducted to the PC board directly under the IC. This allows the IC to be one of the first  components to flow, and this technique can often keep the designer from having to remove edge connectors or components on the bottom-side of the PC board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2648 Evaluation Kit

<!-- image -->

Figure 2. MAX2648 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2648 EV Kit PC Board Layout-Ground Plane

Figure 3. MAX2648 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX2648 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX2648 EV Kit PC Board Layout-Top Side Soldermask

<!-- image -->

Figure 8. MAX2648 EV Kit PC Board Layout-Top Side Silkscreen

<!-- image -->

## MAX2648 Evaluation Kit

Figure 7. MAX2648 EV Kit PC Board Layout-Drill and Mechanicals

<!-- image -->

Figure 9. MAX2648 EV Kit PC Board Layout-Bottom Side Soldermask

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5