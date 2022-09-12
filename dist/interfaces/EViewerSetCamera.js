/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */
export var EViewerSetCamera;
(function (EViewerSetCamera) {
    EViewerSetCamera[EViewerSetCamera["top"] = 0] = "top";
    EViewerSetCamera[EViewerSetCamera["front"] = 1] = "front";
    EViewerSetCamera[EViewerSetCamera["right"] = 2] = "right";
    EViewerSetCamera[EViewerSetCamera["left"] = 3] = "left";
    EViewerSetCamera[EViewerSetCamera["back"] = 4] = "back";
    EViewerSetCamera[EViewerSetCamera["bottom"] = 5] = "bottom";
    EViewerSetCamera[EViewerSetCamera["top,front"] = 6] = "top,front";
    EViewerSetCamera[EViewerSetCamera["top right"] = 7] = "top right";
    EViewerSetCamera[EViewerSetCamera["top,left"] = 8] = "top,left";
    EViewerSetCamera[EViewerSetCamera["top,back"] = 9] = "top,back";
    EViewerSetCamera[EViewerSetCamera["bottom,front"] = 10] = "bottom,front";
    EViewerSetCamera[EViewerSetCamera["bottom,right"] = 11] = "bottom,right";
    EViewerSetCamera[EViewerSetCamera["bottom,left"] = 12] = "bottom,left";
    EViewerSetCamera[EViewerSetCamera["bottom,back"] = 13] = "bottom,back";
    EViewerSetCamera[EViewerSetCamera["left,front"] = 14] = "left,front";
    EViewerSetCamera[EViewerSetCamera["front,right"] = 15] = "front,right";
    EViewerSetCamera[EViewerSetCamera["right,back"] = 16] = "right,back";
    EViewerSetCamera[EViewerSetCamera["back,left"] = 17] = "back,left";
    EViewerSetCamera[EViewerSetCamera["front,top,right"] = 18] = "front,top,right";
    EViewerSetCamera[EViewerSetCamera["back,top,right"] = 19] = "back,top,right";
    EViewerSetCamera[EViewerSetCamera["front,top,left"] = 20] = "front,top,left";
    EViewerSetCamera[EViewerSetCamera["back,top,left"] = 21] = "back,top,left";
    EViewerSetCamera[EViewerSetCamera["front,bottom,right"] = 22] = "front,bottom,right";
    EViewerSetCamera[EViewerSetCamera["back,bottom,right"] = 23] = "back,bottom,right";
    EViewerSetCamera[EViewerSetCamera["front,bottom,left"] = 24] = "front,bottom,left";
    EViewerSetCamera[EViewerSetCamera["back,bottom,left"] = 25] = "back,bottom,left";
})(EViewerSetCamera || (EViewerSetCamera = {}));
