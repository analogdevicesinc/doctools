<!-- lastmod 2025-09-05 -->
## TMC-Schraubstock Description

Document Revision V1.00 • 2018-Mar-28

## Module Example View

<!-- image -->

## Features and additional Resources

- Carrier board for all TRINAMIC breakout boards (BOBs)
- 30 pin connections on left and right side available
- Screw connectors for left/right sidewise cable connections
- Female sockets to carry BOBs for BOB widths of 1", 1.5", or 2"
- Bottom side header options for direct connection to an Arduino controller board or similar
- Example Arduino projects for selected BOBs provided "as is"
- The board is provided unpopulated but with different connectors and headers included for full freedom of use
- Board size 72mm x 85mm
- Eagle CAD design available for free
- Moreinformation available at www.trinamic.com

## Bill of Materials (for typical full board population)

|   Pcs. | MPN              | Value              | Footprint                    | Description                    |
|--------|------------------|--------------------|------------------------------|--------------------------------|
|      1 | TMC-Schraubstock | bare PCB, 2 layers | 72mm x 85mm                  | TRINAMIC                       |
|      1 | SL 1X36G 2,54    | 1x36, 2.54mm pitch | Male header pins             | various manufacturers          |
|     12 | MPE 115-1-015    | 1x15, 2.54mm pitch | Female Socket                | MPE Garry or similar           |
|      6 | ED10567-ND       | 1x10, 2.54mm pitch | Wire to board screw terminal | On Shore Technology or similar |

## What is included in the package?

The following parts are included in the package to start right away with one of TRINAMIC's breakout boards.

- TMC-Schraubstock bare PCB
- 1x 40-pin male header with 2.54mm pitch
- 4x 15-pin female socket with 2.54mm pitch
- 4x 10-pin screw terminal block with 2.54mm pitch

<!-- image -->

<!-- image -->

## PCB Top and Bottom View

<!-- image -->

## Schraubstock Fully Populated Example

<!-- image -->

<!-- image -->

## Schraubstock Assembly Instructions

The following steps are a recommendation if you want to fully assemble a Schraubstock PCB with headers and connectors and use it with an Arduino as shown in the example image. See also the image on the different pin row sections at the end of this document.

For good aligned soldering of the headers, connectors, and sockets we suggest using an Arduino or Arduino shield with socket rows and header rows as "alignment tools"to make live a bit easier. We recommend the following order of soldering the parts to the Schraubstock:

1. Assemble the header rows for the Arduino on the BOTTOM side /uniFB01rst. You need to prepare seperate header rows: 1x 10-pin, 2x 8-pin, and 1x 6-pin. For straight alignment use an Arduino or an Arduino Shield as counterpart during soldering.
2. Insert four (4) female sockets for pins 1-15 and 46-60 at the 1" and 2" row positions and align them using a standard 2.54mm header row.
3. Solder /uniFB01rst and last pins of each female socket and check alignment. Solder the remaining pins.
4. Insert two (2) female sockets for pins 16-30 and 31-45 at the 1.5" row positions and align with a standard 2.54mm header row.
5. Solder /uniFB01rst and last pins of each female socket and check alignment. Solder the remaining pins.
6. Insert the remaining female sockets and align with a standard 2.54mm header row using the already soldered female sockets of the same row.
7. Solder /uniFB01rst and last pins of each female socket and check alignment. Solder the remaining pins.
8. Insert the screw terminal connectors on each side in the outer pin row.
9. ! Verify that the opening for the cable goes outwards !
10. Solder /uniFB01rst and last pins of each screw terminal and check its alignment. Solder the remaining pins.

## Adapt to Your Desired Arduino Pinning

To connect the signals of the BOB you want to use to the Arduino pins you want to use you need to wire and connect the "Arduino Switch Matrix" of the Schraubstock.

You can do this on top or bottom side of the Schraubstock using the two innermost rows of the BOB IOs together with the labeled Arduino signals. Simply connect them with short wires.

See also the image on the different pin row sections at the end of this document.

<!-- image -->

## Schraubstock Pin Row Sections

<!-- image -->

- BLUE = outer rows for screw terminal connectors
- YELLOW = Arduino header connections, to be assembled from bottom side typically. Signals come from the innermost rows of the "Arduino Switch Matrix".
- GREEN = pin rows for the female sockets to carry the BOB you want to use. The pins on each of the three rows on the left side are connected through from the inner "Arduino Switch Matrix" to the left side outer screw terminal connectors. The pins on each of the three rows on the right side are connected through from the inner "Arduino Switch Matrix" to the right side outer screw terminal connectors.
- RED = "Arduino Switch Matrix" to wire each of the BOB signals to each of the Arduino pins.

<!-- image -->